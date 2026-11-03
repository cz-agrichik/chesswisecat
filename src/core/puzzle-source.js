/* core/puzzle-source.js — turns raw puzzle data into packs.
   This is the single place to swap in a smarter selection algorithm later:
   the rest of the app only calls PuzzleSource.getPacks() / getPack(id). */
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
    const lines = String(text).replace(/^\uFEFF/, '').split(/\r?\n/).filter(l => l.trim());
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

  function buildPacks(puzzles) {
    if (Array.isArray(PACKS_OVERRIDE) && PACKS_OVERRIDE.length) {
      const byId = new Map(puzzles.map(p => [p.id, p]));
      return PACKS_OVERRIDE.map((def, i) => ({
        id: 'pack-' + (i + 1), index: i, title: def.title || `Пакет ${i + 1}`,
        puzzles: (def.ids || []).map(id => byId.get(id)).filter(Boolean),
      })).filter(pk => pk.puzzles.length);
    }
    const packs = [];
    for (let i = 0; i * CONFIG.packSize < puzzles.length; i++) {
      packs.push({ id: 'pack-' + (i + 1), index: i, title: `Пакет ${i + 1}`, puzzles: puzzles.slice(i * CONFIG.packSize, (i + 1) * CONFIG.packSize) });
    }
    return packs;
  }

  let cache = null;
  function getPacks() {
    if (cache) return cache;
    const seen = new Set(), all = [];
    for (const p of parseCSV(PUZZLES_CSV)) {
      if (seen.has(p.id)) continue;
      if (!isValid(p)) { console.warn('Puzzle skipped (invalid):', p.id); continue; }
      seen.add(p.id); all.push(p);
    }
    cache = buildPacks(all);
    return cache;
  }
  const getPack = id => getPacks().find(p => p.id === id) || null;

  return { getPacks, getPack, parseCSV, isValid };
})();
