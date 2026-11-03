/* game/progress.js — players and their progress: Elo rating, points, lessons,
   best result per puzzle. Players are keyed by a stable id (name and avatar can be
   edited). Saved in localStorage and, when the page runs as a claude.ai artifact,
   synced through the artifact database. */
const Progress = (function () {
  const AVATARS = ['🦊', '🐻', '🐼', '🐯', '🦁', '🐸', '🐵', '🐰', '🐨', '🦄', '🐙', '🐧'];
  const AVNAMES = ['Лисёнок', 'Медвежонок', 'Панда', 'Тигрёнок', 'Львёнок', 'Лягушонок', 'Обезьянка', 'Зайчик', 'Коала', 'Единорог', 'Осьминожка', 'Пингвин'];
  const SCHEMA = 2;
  const NAME_MAX = 14;
  const S = { players: [], currentId: null, muted: !CONFIG.soundOnByDefault };
  const listeners = new Set();
  const changed = () => listeners.forEach(fn => fn());

  /* ---------- player records ---------- */
  const int = (x, min = 0) => (Number.isFinite(+x) ? Math.max(min, Math.round(+x)) : min);
  const cleanName = s => String(s || '').trim().slice(0, NAME_MAX);

  function fresh(id, name, avatar, now = Date.now()) {
    return {
      id, v: SCHEMA, name: cleanName(name) || 'Игрок', avatar: AVATARS.includes(avatar) ? avatar : AVATARS[0],
      rating: CONFIG.rating.start, bestRating: CONFIG.rating.start,
      points: 0, played: 0, clean: 0, best: {}, recent: [], lesson: null, lessonsDone: 0,
      createdAt: now, updatedAt: now,
    };
  }

  /** Validate a stored/remote record. Old-schema records keep only id, name and avatar. */
  function sanitize(id, v) {
    if (!v || typeof v !== 'object' || typeof id !== 'string' || !/^[\w.~:@+-]{1,60}$/.test(id)) return null;
    const p = fresh(id, v.name, v.avatar, int(v.createdAt));
    p.updatedAt = int(v.updatedAt);
    if (v.v !== SCHEMA) return p;
    p.rating = int(v.rating, CONFIG.rating.floor);
    p.bestRating = Math.max(p.rating, int(v.bestRating));
    p.points = int(v.points); p.played = int(v.played); p.clean = int(v.clean); p.lessonsDone = int(v.lessonsDone);
    if (v.best && typeof v.best === 'object') {
      for (const k of Object.keys(v.best).slice(0, 50000)) p.best[String(k).slice(0, 40)] = Math.min(CONFIG.points.clean, int(v.best[k]));
    }
    if (Array.isArray(v.recent)) p.recent = v.recent.filter(x => typeof x === 'string').map(x => x.slice(0, 40)).slice(0, 50);
    const L = v.lesson;
    if (L && typeof L === 'object') p.lesson = { num: int(L.num, 1), pts: int(L.pts), n: int(L.n), clean: int(L.clean), r0: int(L.r0) };
    return p;
  }
  const toCloud = p => { const o = Object.assign({}, p); delete o.synced; delete o.id; return o; };

  function load() {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(CONFIG.storageKey) || 'null'); } catch (e) { /* storage unavailable */ }
    if (!raw) {   // first run of this version: carry over names and avatars
      for (const k of CONFIG.legacyStorageKeys || []) {
        try { raw = JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { raw = null; }
        if (raw) break;
      }
    }
    if (raw && typeof raw === 'object') {
      if (Array.isArray(raw.players)) S.players = raw.players.map(p => { const v = sanitize(p && p.id, p); if (v) v.synced = !!p.synced && p.v === SCHEMA; return v; }).filter(Boolean);
      S.currentId = raw.currentId || null;
      if (typeof raw.muted === 'boolean') S.muted = raw.muted;
    }
    ensureCurrent(); save();
  }
  function save() {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify({ players: S.players, currentId: S.currentId, muted: S.muted })); } catch (e) { /* ignore */ }
  }
  function ensureCurrent() { if (!S.players.find(p => p.id === S.currentId)) S.currentId = S.players[0] ? S.players[0].id : null; }
  const current = () => S.players.find(p => p.id === S.currentId) || null;
  function setCurrent(id) { S.currentId = id; save(); }
  function addPlayer(name, avatarIdx) {
    const id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    const p = fresh(id, cleanName(name) || AVNAMES[avatarIdx], AVATARS[avatarIdx]);
    p.synced = false;
    S.players.push(p); S.currentId = p.id; save(); queuePush(p, 50);
    return p;
  }
  /** Rename / change avatar. Progress stays attached to the id. */
  function updatePlayer(id, { name, avatarIdx }) {
    const p = S.players.find(x => x.id === id); if (!p) return null;
    if (name !== undefined) p.name = cleanName(name) || p.name;
    if (avatarIdx !== undefined && AVATARS[avatarIdx]) p.avatar = AVATARS[avatarIdx];
    touch(p);
    return p;
  }
  function touch(p) { p.updatedAt = Date.now(); p.synced = false; save(); queuePush(p); }
  function setMuted(v) { S.muted = !!v; save(); }

  /* ---------- rating, points, lessons ---------- */
  /** Expected score of the player against a puzzle (Elo). */
  const expected = (r, puzzleRating) => 1 / (1 + Math.pow(10, (puzzleRating - r) / 400));

  /** Points for a finished puzzle: { mistakes, hints, guided } → 2 / 1 / 0. A hint counts as a mistake. */
  function pointsFor(result) {
    const P = CONFIG.points;
    return result.guided ? P.shown : result.mistakes || result.hints ? P.withMistakes : P.clean;
  }

  function lessonOf(p) {
    if (!p.lesson) p.lesson = { num: p.lessonsDone + 1, pts: 0, n: 0, clean: 0, r0: p.rating };
    return p.lesson;
  }

  /** Record one finished puzzle. Returns what changed, for the screens to show. */
  function record(p, puzzle, result) {
    const L = lessonOf(p);   // opened before the rating changes, so r0 is the rating at the lesson start
    const pts = pointsFor(result), win = pts === CONFIG.points.clean && !result.guided && !result.mistakes && !result.hints;
    const R = CONFIG.rating, before = p.rating;
    const pr = puzzle.rating || p.rating;
    p.rating = Math.max(R.floor, Math.round(p.rating + R.k * ((win ? 1 : 0) - expected(p.rating, pr))));
    p.bestRating = Math.max(p.bestRating, p.rating);
    p.points += pts; p.played++; if (win) p.clean++;
    const had = p.best[puzzle.id];
    p.best[puzzle.id] = had === undefined ? pts : Math.max(had, pts);
    p.recent = [puzzle.id].concat(p.recent.filter(x => x !== puzzle.id)).slice(0, 40);

    L.pts += pts; L.n++; if (win) L.clean++;
    let lessonDone = null;
    if (L.pts >= CONFIG.lessonGoal) {
      lessonDone = Object.assign({}, L, { pts: Math.min(L.pts, CONFIG.lessonGoal), r1: p.rating });
      p.lessonsDone++; p.lesson = null;
    }
    touch(p);
    return { points: pts, win, rating: p.rating, delta: p.rating - before, lesson: lessonDone || Object.assign({}, L), lessonDone };
  }

  /** Ticks for a volume: how many puzzles were met / solved / solved cleanly. */
  function volumeStats(p, vol) {
    let seen = 0, solved = 0, clean = 0;
    for (const z of vol.puzzles) {
      const b = p ? p.best[z.id] : undefined;
      if (b === undefined) continue;
      seen++; if (b >= CONFIG.points.withMistakes) solved++; if (b >= CONFIG.points.clean) clean++;
    }
    return { n: vol.puzzles.length, seen, solved, clean };
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
  const busyIds = new Set();   // players currently solving: don't overwrite them from remote
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
    AVATARS, AVNAMES, NAME_MAX, state: S, load, save, current, setCurrent, addPlayer, updatePlayer, setMuted,
    record, pointsFor, expected, lessonOf, volumeStats, initCloud,
    onChange: fn => listeners.add(fn), markBusy: (id, on) => (on ? busyIds.add(id) : busyIds.delete(id)),
  };
})();
