/* game/progress.js — players and their progress: Elo rating, points, lessons,
   best result per puzzle, a short history of solved puzzles, language and gender.
   Saved in localStorage; syncing between devices is game/cloud.js. Players are keyed by a stable id (name and avatar can be
   edited). Saved in localStorage and, when the page runs as a claude.ai artifact,
   synced through the artifact database. */
const Progress = (function () {
  // Who the child can be: one row of six in the picker.
  const AVATARS = ['🦸', '🧚', '🧑‍🚀', '🦄', '🐱', '🦖'];
  // Avatar names (for screen readers / a default name) are in ui/texts.js.
  // Avatars from earlier versions stay valid until the player picks a new one.
  const LEGACY_AVATARS = ['🧙', '🥷', '🧜', '🤖', '👑', '🦉', '🐬', '🐉', '🐶', '🚀', '🌈', '⚡', '🦊', '🐻', '🐼', '🐯', '🦁', '🐸', '🐵', '🐰', '🐨', '🐙', '🐧'];
  const validAvatar = a => AVATARS.includes(a) || LEGACY_AVATARS.includes(a);
  const SCHEMA = 2;
  const NAME_MAX = 14;
  const HISTORY_MAX = 400;   // last puzzles kept per player for the history screen
  const S = { players: [], currentId: null, muted: !CONFIG.soundOnByDefault, lang: 'en', deleted: {} };
  const listeners = new Set();
  const changed = () => listeners.forEach(fn => fn());

  /* ---------- player records ---------- */
  const int = (x, min = 0) => (Number.isFinite(+x) ? Math.max(min, Math.round(+x)) : min);
  const cleanName = s => String(s || '').trim().slice(0, NAME_MAX);

  function fresh(id, name, avatar, now = Date.now()) {
    return {
      id, v: SCHEMA, name: cleanName(name) || Texts.t('defaultName'), avatar: validAvatar(avatar) ? avatar : AVATARS[0],
      rating: CONFIG.rating.start, bestRating: CONFIG.rating.start,
      points: 0, played: 0, clean: 0, best: {}, recent: [], lesson: null, lessonsDone: 0,
      pauseSec: CONFIG.mistakePauseSec, lang: 'en', gender: 'n', history: [],
      createdAt: now, updatedAt: now,
    };
  }

  /** Validate a stored/remote record. Old-schema records keep only id, name and avatar. */
  function sanitize(id, v) {
    if (!v || typeof v !== 'object' || typeof id !== 'string' || !/^[\w.~:@+-]{1,60}$/.test(id)) return null;
    const p = fresh(id, v.name, v.avatar, int(v.createdAt));
    p.updatedAt = int(v.updatedAt);
    if (v.pauseSec !== undefined) p.pauseSec = Math.min(30, int(v.pauseSec));
    if (Texts.isLang(v.lang)) p.lang = v.lang;
    if (Texts.isGender(v.gender)) p.gender = v.gender;
    if (v.v !== SCHEMA) return p;
    p.rating = int(v.rating, CONFIG.rating.floor);
    p.bestRating = Math.max(p.rating, int(v.bestRating));
    p.points = int(v.points); p.played = int(v.played); p.clean = int(v.clean); p.lessonsDone = int(v.lessonsDone);
    if (v.best && typeof v.best === 'object') {
      for (const k of Object.keys(v.best).slice(0, 50000)) p.best[String(k).slice(0, 40)] = Math.min(CONFIG.points.clean, int(v.best[k]));
    }
    if (Array.isArray(v.history)) p.history = v.history.slice(0, HISTORY_MAX).map(cleanEntry).filter(Boolean);
    if (Array.isArray(v.recent)) p.recent = v.recent.filter(x => typeof x === 'string').map(x => x.slice(0, 40)).slice(0, 50);
    const L = v.lesson;
    if (L && typeof L === 'object') p.lesson = { num: int(L.num, 1), pts: int(L.pts), n: int(L.n), clean: int(L.clean), r0: int(L.r0) };
    return p;
  }
  /** One history entry: t time (ms), id puzzle, v book id, r puzzle rating, s points (2 clean / 1 mistakes / 0 arrows),
      d rating change, R rating after. Newest first. */
  function cleanEntry(e) {
    if (!e || typeof e !== 'object' || typeof e.id !== 'string') return null;
    return { t: int(e.t), id: e.id.slice(0, 40), v: String(e.v || '').slice(0, 40), r: int(e.r), s: Math.min(2, int(e.s)),
      d: Number.isFinite(+e.d) ? Math.round(+e.d) : 0, R: int(e.R) };
  }

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
      if (Texts.isLang(raw.lang)) S.lang = raw.lang;
      if (raw.deleted && typeof raw.deleted === 'object') S.deleted = raw.deleted;
    }
    ensureCurrent(); save();
  }
  function save() {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify({ players: S.players, currentId: S.currentId, muted: S.muted, lang: S.lang, deleted: S.deleted })); } catch (e) { /* ignore */ }
  }
  function ensureCurrent() { if (!S.players.find(p => p.id === S.currentId)) S.currentId = S.players[0] ? S.players[0].id : null; }
  const current = () => S.players.find(p => p.id === S.currentId) || null;
  function setCurrent(id) { S.currentId = id; const p = current(); if (p) S.lang = p.lang; save(); }
  function addPlayer(name, avatarIdx, pauseSec, lang, gender) {
    const id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    const p = fresh(id, cleanName(name) || Texts.avName(avatarIdx), AVATARS[avatarIdx]);
    if (pauseSec !== undefined) p.pauseSec = Math.min(30, int(pauseSec));
    if (Texts.isLang(lang)) p.lang = S.lang = lang;
    if (Texts.isGender(gender)) p.gender = gender;
    p.synced = false;
    S.players.push(p); S.currentId = p.id; save(); Cloud.push(p, 50);
    return p;
  }
  /** Rename / change avatar / settings. Progress stays attached to the id. */
  function updatePlayer(id, { name, avatarIdx, pauseSec, lang, gender }) {
    const p = S.players.find(x => x.id === id); if (!p) return null;
    if (name !== undefined) p.name = cleanName(name) || p.name;
    if (avatarIdx !== undefined && AVATARS[avatarIdx]) p.avatar = AVATARS[avatarIdx];
    if (pauseSec !== undefined) p.pauseSec = Math.min(30, int(pauseSec));
    if (Texts.isLang(lang)) { p.lang = lang; if (p.id === S.currentId) S.lang = lang; }
    if (Texts.isGender(gender)) p.gender = gender;
    touch(p);
    return p;
  }
  /** Delete a player for good. In the cloud the record is replaced by a small tombstone
      ({ deleted: true }) so that other devices drop it too instead of uploading it again. */
  function removePlayer(id) {
    const p = S.players.find(x => x.id === id); if (!p) return false;
    S.players = S.players.filter(x => x !== p);
    S.deleted[id] = Date.now();
    const ids = Object.keys(S.deleted); if (ids.length > 200) delete S.deleted[ids[0]];
    if (S.currentId === id) S.currentId = null;
    ensureCurrent(); if (current()) S.lang = current().lang;
    save(); changed();
    Cloud.markDeleted(id);
    return true;
  }
  function touch(p) { p.updatedAt = Date.now(); p.synced = false; save(); Cloud.push(p); }
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
    p.history.unshift({ t: Date.now(), id: puzzle.id, v: puzzle.vol || '', r: int(puzzle.rating), s: pts, d: p.rating - before, R: p.rating });
    if (p.history.length > HISTORY_MAX) p.history.length = HISTORY_MAX;

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

  return {
    AVATARS, NAME_MAX, HISTORY_MAX, state: S, load, save, current, setCurrent, addPlayer, updatePlayer, removePlayer, setMuted,
    record, pointsFor, expected, lessonOf, volumeStats,
    initCloud: () => Cloud.init(), markBusy: (id, on) => Cloud.markBusy(id, on),
    onChange: fn => listeners.add(fn),
    // for game/cloud.js only
    _sync: { sanitize, int, ensureCurrent, changed },
  };
})();
