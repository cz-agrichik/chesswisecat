/* Data and texts, no browser: every book on the shelf has its file and a title in every
   language; every puzzle is playable; every language has
   every key English has; the first line of a puzzle never hints at its theme. */
const fs = require('fs'), path = require('path');
const { loadCore, pageFiles, SRC } = require('../tools/load-core');
const { assert } = require('./helpers');

module.exports = {
  name: 'data: books, puzzles, translations',
  run() {
    const ctx = loadCore();
    const ids = ctx.BOOKS.map(b => b.id);
    assert(new Set(ids).size === ids.length, 'duplicate book id in data/books.js');
    const files = fs.readdirSync(path.join(SRC, 'data', 'books')).map(f => f.replace(/\.js$/, ''));
    for (const id of ids) assert(files.includes(id), `data/books/${id}.js is missing`);
    for (const f of files) assert(ids.includes(f), `data/books/${f}.js is not on the shelf (data/books.js)`);
    for (const id of ids) assert(ctx.PUZZLE_CSV[id], `data/books/${id}.js does not set PUZZLE_CSV['${id}']`);

    // every puzzle is valid (parseBook would silently drop invalid ones). The same puzzle
    // may sit in two books (Lichess themes overlap); the mixed "Solve" pool counts it once.
    for (const b of ctx.BOOKS) {
      const raw = ctx.PuzzleSource.parseCSV(ctx.PUZZLE_CSV[b.id]);
      const bad = raw.filter(p => !ctx.PuzzleSource.isValid(p)).map(p => p.id);
      assert(!bad.length, `${b.id}: invalid puzzles ${bad.slice(0, 5).join(', ')}`);
    }

    // translations: same keys as English, a title for every book
    const T = ctx.Texts, langs = T.LANGS.map(l => l.code);
    assert(langs.includes('en'), 'no English');
    for (const code of langs) {
      for (const b of ctx.BOOKS) {
        T.setLang(code);
        const t = T.bookTitle(b);
        assert(t && t !== b.id, `i18n/${code}.js: no title for book '${b.id}'`);
      }
    }
    const src = code => fs.readFileSync(path.join(SRC, 'i18n', code + '.js'), 'utf8');
    const topKeys = s => new Set([...s.matchAll(/^  (\w+):/gm)].map(m => m[1]));
    const en = topKeys(src('en'));
    for (const code of langs) {
      const k = topKeys(src(code));
      const missing = [...en].filter(x => !k.has(x));
      assert(!missing.length, `i18n/${code}.js is missing: ${missing.join(', ')}`);
    }

    // the task line never names the theme: same for a mate puzzle and any other
    for (const code of langs) {
      T.setLang(code);
      for (let i = 0; i < 30; i++) {
        const g = T.goal({ themes: ['mate', 'mateIn2', 'fork'] }, 'w');
        assert(!/mat|ματ|fork|вилк|πιρούνι/i.test(g.replace(/^.*?[.!]\s/, '')), `${code}: the task line hints at the puzzle: "${g}"`);
      }
    }

    // openings: every study parses, has lines to learn and a name in every language
    for (const o of ctx.OPENINGS) {
      const g = ctx.Pgn.parseGame(o.pgn);
      const lines = ctx.Pgn.lines(g.root, g.player);
      assert(lines.length && lines[0].moves.length, `opening ${o.id}: nothing to learn`);
      for (const code of langs) { T.setLang(code); assert(T.openingName(o.id) !== o.id, `i18n/${code}.js: no name for opening '${o.id}'`); }
    }
    T.setLang('en');
    const it = ctx.Pgn.parseGame(ctx.OPENINGS.find(o => o.id === 'italian').pgn);
    const total = ctx.Pgn.lines(it.root, it.player).reduce((a, l) => a + l.moves.length, 0);
    assert(total === 26, 'italian: the study has 26 moves of ours, parsed ' + total);

    // random order: the same lines and moves, one main line, depth first (each line parts from the one before)
    for (const o of ctx.OPENINGS) {
      const g = ctx.Pgn.parseGame(o.pgn), L0 = ctx.Pgn.lines(g.root, g.player);
      const total = L0.reduce((a, l) => a + l.moves.length, 0);
      assert(L0[0].main && L0.filter(l => l.main).length === 1, `${o.id}: in PGN order the main line is first`);
      for (let t = 0; t < 50; t++) {
        const L = ctx.Pgn.lines(g.root, g.player, Math.random);
        assert(L.length === L0.length && L.reduce((a, l) => a + l.moves.length, 0) === total, `${o.id}: a random order changes the lines`);
        assert(L.filter(l => l.main).length === 1, `${o.id}: one main line`);
        const leaves = new Set(L.map(l => l.path[l.path.length - 1]));
        assert(L0.every(l => leaves.has(l.path[l.path.length - 1])), `${o.id}: a line is lost in a random order`);
      }
    }
    {
      // 3 moves vs 1 vs 1 → 60% / 20% / 20% for the first pick
      const w = { a: 3, b: 1, c: 1 }, cnt = { a: 0, b: 0, c: 0 }, N = 20000;
      for (let t = 0; t < N; t++) cnt[ctx.Pgn.weightedShuffle(['a', 'b', 'c'], x => w[x])[0]]++;
      const f = ['a', 'b', 'c'].map(x => cnt[x] / N);
      assert(Math.abs(f[0] - 0.6) < 0.02 && Math.abs(f[1] - 0.2) < 0.02 && Math.abs(f[2] - 0.2) < 0.02, 'weighted pick: ' + f.join());
    }

    // index.html loads files that exist
    for (const f of pageFiles()) assert(fs.existsSync(path.join(SRC, f)), `index.html loads missing src/${f}`);
  },
};
