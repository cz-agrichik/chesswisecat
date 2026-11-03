/* core/puzzle-source.js — turns raw puzzle data into volumes (books on the shelf)
   and decides which puzzle comes next. This is the single place to swap in a
   smarter selection algorithm later: the rest of the app only calls
   PuzzleSource.getVolumes() / getVolume(id) / pickNext(volume, player). */
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

  function buildVolumes(puzzles) {
    const defs = Array.isArray(VOLUMES) && VOLUMES.length ? VOLUMES : [{ id: 'all', title: 'Задачи', ids: null }];
    const byId = new Map(puzzles.map(p => [p.id, p]));
    return defs.map((def, i) => ({
      id: def.id || 'vol-' + (i + 1), index: i, title: def.title || `Том ${i + 1}`, short: def.short || def.title || `Том ${i + 1}`,
      puzzles: Array.isArray(def.ids) ? def.ids.map(id => byId.get(id)).filter(Boolean) : puzzles.slice(),
    })).filter(v => v.puzzles.length);
  }

  let cache = null;
  function getVolumes() {
    if (cache) return cache;
    const seen = new Set(), all = [];
    for (const p of parseCSV(PUZZLES_CSV)) {
      if (seen.has(p.id)) continue;
      if (!isValid(p)) { console.warn('Puzzle skipped (invalid):', p.id); continue; }
      seen.add(p.id); all.push(p);
    }
    cache = buildVolumes(all);
    return cache;
  }
  const getVolume = id => getVolumes().find(v => v.id === id) || null;

  /** Next puzzle for this player from the volume. Current rule:
      1) never-seen puzzles first, at random;
      2) then puzzles not yet solved cleanly;
      3) then anything — always skipping the last CONFIG.avoidRecent ones when possible. */
  function pickNext(vol, player) {
    const all = vol.puzzles; if (!all.length) return null;
    const best = (player && player.best) || {};
    const recent = new Set(((player && player.recent) || []).slice(0, Math.min(CONFIG.avoidRecent, all.length - 1)));
    const pool = all.filter(z => !recent.has(z.id));
    const rnd = a => a[Math.floor(Math.random() * a.length)];
    const unseen = pool.filter(z => best[z.id] === undefined);
    if (unseen.length) return rnd(unseen);
    const weak = pool.filter(z => best[z.id] < CONFIG.points.clean);
    if (weak.length) return rnd(weak);
    return rnd(pool.length ? pool : all);
  }

  return { getVolumes, getVolume, pickNext, parseCSV, isValid };
})();
