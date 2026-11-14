/* tools/build-artifact.js — builds the single-file version for publishing as a
   claude.ai artifact: every file from FILES in index.html (and every book file) is
   inlined in load order. No doctype/html/head/body: the artifact host adds them.
   Usage: node tools/build-artifact.js [out.html]   (default: dist/chesswisecat.html) */
const fs = require('fs'), path = require('path');
const { pageFiles, ROOT, SRC } = require('./load-core');

const out = path.resolve(process.argv[2] || path.join(ROOT, 'dist', 'chesswisecat.html'));
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
// <head> contents from the theme colour to the end (meta tags, fonts, title)
const head = html.slice(html.indexOf('<meta name="theme-color"'), html.indexOf('</head>'));
const parts = [head.trim(), '<div id="app"></div>'];
const script = (code, name) => `<script>/* ${name} */\n${code.replace(/<\/script/gi, '<\\/script')}\n</script>`;

for (const f of pageFiles()) {
  const code = fs.readFileSync(path.join(SRC, f), 'utf8');
  if (f.endsWith('.css')) { parts.push(`<style>\n${code}\n</style>`); continue; }
  if (f === 'data/books.js') {
    parts.push('<script>window.BOOKS_INLINED = true;</script>', script(code, f));
    const ids = [...code.matchAll(/\{ id: '([\w-]+)'/g)].map(m => m[1]);
    for (const id of ids) parts.push(script(fs.readFileSync(path.join(SRC, 'data', 'books', id + '.js'), 'utf8'), `data/books/${id}.js`));
    continue;
  }
  parts.push(script(code, f));
}
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, parts.join('\n'));
console.log(`built ${path.relative(process.cwd(), out)} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
