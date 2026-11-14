/* tools/load-core.js — loads the app's non-DOM parts (config, books, chess rules,
   puzzle source, texts) into a Node vm context, for tests and tools that need the data
   without a browser. Returns the context: ctx.BOOKS, ctx.PuzzleSource, ctx.Texts, … */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

function loadCore() {
  const ctx = { console, BOOKS_INLINED: true };
  ctx.window = ctx;
  vm.createContext(ctx);
  // top-level `const X =` in a vm script is not visible on the context; turn it into var
  const run = f => vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8').replace(/^const (\w+) =/gm, 'var $1 ='), ctx, { filename: f });
  run('config.js');
  run('data/books.js');
  for (const b of ctx.BOOKS) {
    const f = `data/books/${b.id}.js`;
    if (fs.existsSync(path.join(SRC, f))) run(f);
  }
  for (const f of ['core/chess.js', 'core/puzzle-source.js', 'ui/texts.js']) run(f);
  for (const f of fs.readdirSync(path.join(SRC, 'i18n')).sort()) run('i18n/' + f);
  return ctx;
}

/** Files the page loads, in order (FILES in index.html). */
function pageFiles() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const block = html.slice(html.indexOf('const FILES'), html.indexOf('];', html.indexOf('const FILES')));
  return [...block.matchAll(/'([\w/.-]+\.(?:css|js))'/g)].map(m => m[1]);
}

module.exports = { loadCore, pageFiles, ROOT, SRC };
