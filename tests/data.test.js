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

    // index.html loads files that exist
    for (const f of pageFiles()) assert(fs.existsSync(path.join(SRC, f)), `index.html loads missing src/${f}`);
  },
};
