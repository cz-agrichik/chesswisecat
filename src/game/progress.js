/* game/progress.js — players and their progress: points, best stars per puzzle,
   which puzzles were attempted, endless levels. Saved in localStorage and, when the
   page runs as a claude.ai artifact, synced through the artifact database. */
const Progress = (function () {
  const AVATARS = ['🦊', '🐻', '🐼', '🐯', '🦁', '🐸', '🐵', '🐰', '🐨', '🦄', '🐙', '🐧'];
  const AVNAMES = ['Лисёнок', 'Медвежонок', 'Панда', 'Тигрёнок', 'Львёнок', 'Лягушонок', 'Обезьянка', 'Зайчик', 'Коала', 'Единорог', 'Осьминожка', 'Пингвин'];
  const S = { players: [], currentId: null, muted: !CONFIG.soundOnByDefault };
  const listeners = new Set();
  const changed = () => listeners.forEach(fn => fn());

  /* ---------- players ---------- */
  function sanitize(id, v) {
    if (!v || typeof v !== 'object' || typeof id !== 'string' || !/^[\w.~:@+-]{1,60}$/.test(id)) return null;
    const n = x => (Number.isFinite(+x) && +x >= 0 ? Math.floor(+x) : 0);
    const map = (o, cap) => { const r = {}; if (o && typeof o === 'object') for (const k of Object.keys(o).slice(0, 50000)) { const x = Math.min(cap, n(o[k])); if (x > 0) r[String(k).slice(0, 40)] = x; } return r; };
    return {
      id, name: String(v.name || 'Игрок').slice(0, 20), avatar: AVATARS.includes(v.avatar) ? v.avatar : AVATARS[0],
      points: n(v.points), stars: map(v.stars, 3), seen: map(v.seen, 1), solved: n(v.solved), bestStreak: n(v.bestStreak),
      createdAt: n(v.createdAt), updatedAt: n(v.updatedAt),
    };
  }
  const toCloud = p => ({ name: p.name, avatar: p.avatar, points: p.points, stars: p.stars, seen: p.seen, solved: p.solved, bestStreak: p.bestStreak, createdAt: p.createdAt, updatedAt: p.updatedAt });

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(CONFIG.storageKey) || 'null');
      if (raw && typeof raw === 'object') {
        if (Array.isArray(raw.players)) S.players = raw.players.map(p => { const v = sanitize(p && p.id, p); if (v) v.synced = !!p.synced; return v; }).filter(Boolean);
        S.currentId = raw.currentId || null;
        if (typeof raw.muted === 'boolean') S.muted = raw.muted;
      }
    } catch (e) { /* storage unavailable */ }
    ensureCurrent();
  }
  function save() {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify({ players: S.players, currentId: S.currentId, muted: S.muted })); } catch (e) { /* ignore */ }
  }
  function ensureCurrent() { if (!S.players.find(p => p.id === S.currentId)) S.currentId = S.players[0] ? S.players[0].id : null; }
  const current = () => S.players.find(p => p.id === S.currentId) || null;
  function setCurrent(id) { S.currentId = id; save(); }
  function addPlayer(name, avatarIdx) {
    const now = Date.now();
    const p = { id: 'p' + now.toString(36) + Math.random().toString(36).slice(2, 7), name: (name || '').trim().slice(0, 14) || AVNAMES[avatarIdx], avatar: AVATARS[avatarIdx] || AVATARS[0], points: 0, stars: {}, seen: {}, solved: 0, bestStreak: 0, createdAt: now, updatedAt: now, synced: false };
    S.players.push(p); S.currentId = p.id; save(); queuePush(p, 50);
    return p;
  }
  function touch(p) { p.updatedAt = Date.now(); p.synced = false; save(); queuePush(p); }
  function setMuted(v) { S.muted = !!v; save(); }

  /* ---------- scoring ---------- */
  /** Record one finished puzzle. Returns points gained and level change. */
  function record(p, puzzle, result, streak) {
    const before = levelOf(p.points);
    const hadStars = p.stars[puzzle.id] || 0;
    let pts = 0, bonus = 0;
    if (result.solved) {
      const base = result.stars * CONFIG.pointsPerStar(puzzle.rating);
      const improved = result.stars > hadStars;
      pts = Math.round(hadStars && !improved ? base * CONFIG.replayFactor : base);
      bonus = CONFIG.streakBonus(streak);
      p.solved++;
      p.stars[puzzle.id] = Math.max(hadStars, result.stars);
      p.bestStreak = Math.max(p.bestStreak, streak);
    }
    p.seen[puzzle.id] = 1;
    p.points += pts + bonus;
    touch(p);
    const after = levelOf(p.points);
    return { points: pts + bonus, bonus, levelUp: after.level > before.level ? after : null };
  }

  function levelOf(points) {
    let level = 1, floor = 0;
    while (points >= floor + CONFIG.levelNeed(level)) { floor += CONFIG.levelNeed(level); level++; }
    const need = CONFIG.levelNeed(level), into = points - floor;
    const t = CONFIG.levelTitles, title = level <= t.length ? t[level - 1] : `${t[t.length - 1]} ${level - t.length + 1}`;
    return { level, title, into, need, left: need - into, pct: Math.round(into / need * 100) };
  }

  function packStats(p, pack) {
    let stars = 0, seen = 0, solved = 0;
    for (const z of pack.puzzles) { const s = (p && p.stars[z.id]) || 0; stars += s; if (s) solved++; if (p && p.seen[z.id]) seen++; }
    const n = pack.puzzles.length;
    return { stars, max: n * 3, seen, solved, n, complete: seen >= n, perfect: stars >= n * 3 };
  }

  /** Where "Решать" should take the child: first unattempted puzzle, else the weakest pack. */
  function nextTarget(p, packs) {
    if (!packs.length) return null;
    for (const pack of packs) {
      const i = pack.puzzles.findIndex(z => !(p && p.seen[z.id]));
      if (i >= 0) return { pack, index: i, mode: 'continue' };
    }
    let best = null;
    for (const pack of packs) {
      const st = packStats(p, pack), ratio = st.stars / st.max;
      if (!best || ratio < best.ratio) best = { pack, ratio };
    }
    const i = best.pack.puzzles.findIndex(z => ((p && p.stars[z.id]) || 0) < 3);
    return { pack: best.pack, index: Math.max(0, i), mode: best.ratio >= 1 ? 'again' : 'replay' };
  }

  /* ---------- cloud sync (claude.ai artifact database) ---------- */
  let DB = null, writable = true;
  const timers = new Map(), pending = new Set(), chains = new Map(), retries = new Map();
  async function initCloud() {
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
    for (const d of snap.docs) { if (!d.exists) continue; const v = sanitize(d.id, d.data()); if (v) remote.set(d.id, v); }
    let dirty = false;
    for (const [id, rv] of remote) {
      const l = S.players.find(p => p.id === id);
      if (!l) { S.players.push(Object.assign(rv, { synced: true })); dirty = true; }
      else if (rv.updatedAt > l.updatedAt) { if (busyIds.has(id)) continue; Object.assign(l, rv, { synced: true }); dirty = true; }
      else if (rv.updatedAt < l.updatedAt) queuePush(l);
      else if (!l.synced) { l.synced = true; dirty = true; }
    }
    if (!snap.metadata || !snap.metadata.fromCache) {
      for (const l of S.players.slice()) {
        if (remote.has(l.id)) continue;
        if (l.synced && !pending.has(l.id)) { S.players = S.players.filter(x => x !== l); dirty = true; }
        else queuePush(l);
      }
    }
    if (dirty) { ensureCurrent(); save(); changed(); }
  }
  const busyIds = new Set();   // players currently mid-pack: don't overwrite them from remote
  function queuePush(p, delay = 900) {
    if (!DB || !writable || !p) return;
    pending.add(p.id); clearTimeout(timers.get(p.id));
    timers.set(p.id, setTimeout(() => push(p.id), delay));
  }
  function push(id) {
    const p = S.players.find(x => x.id === id);
    if (!p || !DB) { pending.delete(id); return; }
    const data = toCloud(p), stamp = p.updatedAt;
    const next = (chains.get(id) || Promise.resolve())
      .then(() => DB.collection('players').doc(id).set(data))
      .then(() => { if (p.updatedAt === stamp) p.synced = true; retries.delete(id); save(); })
      .catch(e => {
        const c = e && e.code, r = retries.get(id) || 0;
        if ((c === 'unavailable' || c === 'resource_exhausted') && r < 3) { retries.set(id, r + 1); setTimeout(() => queuePush(p, 0), 1500 + Math.random() * 2500); }
        else if (c === 'quota_exceeded') UI.toast('Облачное хранилище заполнено — прогресс сохранён на устройстве.');
        else if (c !== 'unavailable' && c !== 'resource_exhausted') writable = false;
      })
      .finally(() => { if (chains.get(id) === next) { chains.delete(id); pending.delete(id); } });
    chains.set(id, next);
  }

  return {
    AVATARS, AVNAMES, state: S, load, save, current, setCurrent, addPlayer, setMuted,
    record, levelOf, packStats, nextTarget, initCloud,
    onChange: fn => listeners.add(fn), markBusy: (id, on) => (on ? busyIds.add(id) : busyIds.delete(id)),
    totalStars: p => Object.values((p && p.stars) || {}).reduce((a, b) => a + b, 0),
  };
})();
