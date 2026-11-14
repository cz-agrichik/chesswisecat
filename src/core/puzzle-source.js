/* core/puzzle-source.js — turns raw puzzle data into volumes (books on the shelf)
   and decides which puzzle comes next. This is the single place to swap in a
   smarter selection algorithm later: the rest of the app only calls
   PuzzleSource.getVolumes() / getVolume(id) / getMixed() / pickNext(volume, player). */
const PuzzleSource = (function () {
  function splitCSV(line) {
    if (line.indexOf('"') < 0) return line.split(',');
    const out = []; let cur = '', q = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (q) { if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
      else if (ch === '"') q = true; else if (ch === ',') { out.push(cur); cur = ''; } else cur += ch;
    }
    out.push(cur); return out;
  }

  function parseCSV(text) {
    const lines = String(text).replace(/^﻿/, '').split(/\r?\n/).filter(l => l.trim());
    if (!lines.length) return [];
    let col = { id: 0, fen: 1, moves: 2, rating: 3, themes: 7, url: 8 };
    if (/fen/i.test(lines[0]) && /moves/i.test(lines[0])) {
      const hdr = splitCSV(lines.shift()).map(s => s.trim().toLowerCase());
      const f = n => hdr.indexOf(n);
      col = { id: f('puzzleid'), fen: f('fen'), moves: f('moves'), rating: f('rating'), themes: f('themes'), url: f('gameurl') };
    }
    return lines.map(l => {
      const c = splitCSV(l), get = k => (col[k] >= 0 ? String(c[col[k]] || '').trim() : '');
      return {
        id: get('id'), fen: get('fen'),
        moves: get('moves').split(/\s+/).filter(Boolean),
        rating: +get('rating') || 0,
        themes: get('themes').split(/\s+/).filter(Boolean),
        url: get('url'),
      };
    });
  }

  function isValid(p) {
    if (!p.id || !p.fen || p.moves.length < 2) return false;
    try {
      let s = ChessCore.parseFEN(p.fen);
      for (const u of p.moves) { const m = ChessCore.findMove(s, u); if (!m) return false; s = ChessCore.make(s, m); }
      return true;
    } catch (e) { return false; }
  }

  function parseBook(csv, volId) {
    const seen = new Set(), out = [];
    for (const p of parseCSV(csv)) {
      if (seen.has(p.id)) continue;
      if (!isValid(p)) { console.warn('Puzzle skipped (invalid):', volId, p.id); continue; }
      seen.add(p.id); p.vol = volId; out.push(p);
    }
    return out;
  }

  let cache = null, mixed = null;
  /** Books on the shelf, in order. */
  function getVolumes() {
    if (cache) return cache;
    // BOOKS (data/books.js) gives the order and colours; each book's CSV is in data/books/<id>.js.
    // Titles are in i18n/*.js (Texts.bookTitle).
    cache = (Array.isArray(BOOKS) ? BOOKS : []).map((def, i) => (
      { id: def.id, index: i, color: def.color || null, puzzles: parseBook(PUZZLE_CSV[def.id] || '', def.id) }
    )).filter(v => v.puzzles.length);
    return cache;
  }
  const getVolume = id => getVolumes().find(v => v.id === id) || null;
  /** All books together: what the main Solve button draws from. */
  function getMixed() {
    if (mixed) return mixed;
    const seen = new Set(), puzzles = [];
    for (const v of getVolumes()) for (const z of v.puzzles) if (!seen.has(z.id)) { seen.add(z.id); puzzles.push(z); }
    mixed = { id: 'all', index: -1, puzzles, mixed: true };
    return mixed;
  }

  /** How likely a puzzle is, by its rating vs the player's (CONFIG.ratingWindow):
      inside [x+low, x+high] → 1; every `step` further out halves it; beyond
      `maxSteps` steps → 0 (never picked while anything closer exists). */
  function ratingWeight(puzzleRating, playerRating) {
    const W = CONFIG.ratingWindow, x = playerRating, r = puzzleRating;
    const out = r < x + W.low ? (x + W.low) - r : r > x + W.high ? r - (x + W.high) : 0;
    if (!out) return 1;
    const k = Math.ceil(out / W.step);
    return k > W.maxSteps ? 0 : Math.pow(0.5, k);
  }

  function weightedPick(list, weightOf) {
    let total = 0; const ws = list.map(z => { const w = weightOf(z); total += w; return w; });
    if (total <= 0) return null;
    let u = Math.random() * total;
    for (let i = 0; i < list.length; i++) { u -= ws[i]; if (u < 0) return list[i]; }
    return list[list.length - 1];
  }

  /** Next puzzle for this player from the volume. Current rule:
      1) never-seen puzzles first; 2) then puzzles not yet solved cleanly; 3) then anything.
      Inside each group the choice is random, weighted by ratingWeight (closer to the
      player's level = likelier). The last CONFIG.avoidRecent puzzles are skipped when
      possible. If nothing in the volume is within the window, the puzzles closest to
      the player's level are used instead. */
  function pickNext(vol, player) {
    const all = vol.puzzles; if (!all.length) return null;
    const best = (player && player.best) || {};
    const x = player && Number.isFinite(player.rating) ? player.rating : CONFIG.rating.start;
    const recent = new Set(((player && player.recent) || []).slice(0, Math.min(CONFIG.avoidRecent, all.length - 1)));
    const pool = all.filter(z => !recent.has(z.id));
    const weight = z => ratingWeight(z.rating, x);
    const groups = [
      pool.filter(z => best[z.id] === undefined),
      pool.filter(z => best[z.id] !== undefined && best[z.id] < CONFIG.points.clean),
      pool,
    ];
    for (const g of groups) { const z = weightedPick(g, weight); if (z) return z; }
    // nothing within the window: take the nearest-rated puzzles (still preferring unseen)
    const src = groups.find(g => g.length) || all;
    const dist = z => Math.abs(z.rating - (x + (CONFIG.ratingWindow.low + CONFIG.ratingWindow.high) / 2));
    const dmin = Math.min(...src.map(dist));
    const near = src.filter(z => dist(z) - dmin < CONFIG.ratingWindow.step);
    return near[Math.floor(Math.random() * near.length)];
  }

  return { getVolumes, getVolume, getMixed, pickNext, ratingWeight, parseCSV, isValid };
})();
