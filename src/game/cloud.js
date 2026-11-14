/* game/cloud.js — syncs players between devices through the claude.ai artifact
   database (collection 'players', one document per player id). Does nothing when the
   page is not running as an artifact. Rules:
   - newer updatedAt wins; a player who is solving right now is never overwritten;
   - a deleted player becomes a tombstone { deleted: true } so other devices drop it
     instead of uploading it again (the local list Progress.state.deleted does the same
     before the tombstone arrives). */
const Cloud = (function () {
  const S = Progress.state;
  const { sanitize, int, ensureCurrent, changed } = Progress._sync;
  const save = () => Progress.save();
  const toCloud = p => { const o = Object.assign({}, p); delete o.synced; delete o.id; return o; };

  let DB = null, writable = true;
  const timers = new Map(), pending = new Set(), chains = new Map(), retries = new Map();
  async function init() {
    if (!window.claude || typeof window.claude.use !== 'function') return;
    let db = null;
    try { db = await window.claude.use('db'); } catch (e) { db = null; }
    if (!db) return;
    DB = db;
    try {
      DB.collection('players').onSnapshot(onSnap, e => {
        const c = e && e.code;
        if (c === 'revoked' || c === 'not_granted' || c === 'capability_disabled' || c === 'capability_removed') DB = null;
      });
    } catch (e) { DB = null; }
  }
  function onSnap(snap) {
    const remote = new Map();
    let dirty = false;
    for (const d of snap.docs) {
      if (!d.exists) continue;
      const data = d.data();
      if ((data && data.deleted) || S.deleted[d.id]) {   // deleted here or on another device
        if (data && data.deleted) S.deleted[d.id] = S.deleted[d.id] || int(data.updatedAt) || Date.now();
        if (S.players.some(p => p.id === d.id)) { S.players = S.players.filter(p => p.id !== d.id); dirty = true; }
        if (!(data && data.deleted) && DB) { try { DB.collection('players').doc(d.id).set({ deleted: true, updatedAt: Date.now() }); } catch (e) { /* ignore */ } }
        continue;
      }
      const v = sanitize(d.id, data); if (v) remote.set(d.id, v);
    }
    for (const [id, rv] of remote) {
      const l = S.players.find(p => p.id === id);
      if (!l) { S.players.push(Object.assign(rv, { synced: true })); dirty = true; }
      else if (rv.updatedAt > l.updatedAt) { if (busyIds.has(id)) continue; Object.assign(l, rv, { synced: true }); dirty = true; }
      else if (rv.updatedAt < l.updatedAt) push_(l);
      else if (!l.synced) { l.synced = true; dirty = true; }
    }
    if (!snap.metadata || !snap.metadata.fromCache) {
      for (const l of S.players.slice()) {
        if (remote.has(l.id)) continue;
        if (l.synced && !pending.has(l.id)) { S.players = S.players.filter(x => x !== l); dirty = true; }
        else push_(l);
      }
    }
    if (dirty) { ensureCurrent(); save(); changed(); }
  }
  const busyIds = new Set();   // players currently solving: don't overwrite them from remote
  function push_(p, delay = 900) {
    if (!DB || !writable || !p) return;
    pending.add(p.id); clearTimeout(timers.get(p.id));
    timers.set(p.id, setTimeout(() => upload(p.id), delay));
  }
  function upload(id) {
    const p = S.players.find(x => x.id === id);
    if (!p || !DB) { pending.delete(id); return; }
    const data = toCloud(p), stamp = p.updatedAt;
    const next = (chains.get(id) || Promise.resolve())
      .then(() => DB.collection('players').doc(id).set(data))
      .then(() => { if (p.updatedAt === stamp) p.synced = true; retries.delete(id); save(); })
      .catch(e => {
        const c = e && e.code, r = retries.get(id) || 0;
        if ((c === 'unavailable' || c === 'resource_exhausted') && r < 3) { retries.set(id, r + 1); setTimeout(() => push_(p, 0), 1500 + Math.random() * 2500); }
        else if (c === 'quota_exceeded') UI.toast(Texts.t('cloudFull'));
        else if (c !== 'unavailable' && c !== 'resource_exhausted') writable = false;
      })
      .finally(() => { if (chains.get(id) === next) { chains.delete(id); pending.delete(id); } });
    chains.set(id, next);
  }

  /** Replace the player's record with a tombstone. */
  function markDeleted(id) {
    clearTimeout(timers.get(id)); pending.delete(id);
    if (!DB) return;   // offline: the local list still hides the player; the tombstone is written by onSnap later
    try { Promise.resolve(DB.collection('players').doc(id).set({ deleted: true, updatedAt: Date.now() })).catch(() => {}); } catch (e) { /* ignore */ }
  }

  return { init, push: push_, markDeleted, markBusy: (id, on) => (on ? busyIds.add(id) : busyIds.delete(id)) };
})();
