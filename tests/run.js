/* tests/run.js — runs every tests/*.test.js. Each test module exports
   { name, browser?: true, run(browser) } and throws on failure. Screenshots go to
   tests/out/ (not in git). Usage: npm test   or   node tests/run.js [filter] */
const fs = require('fs'), path = require('path');
const filter = process.argv[2] || '';

(async () => {
  const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.test.js') && f.includes(filter)).sort();
  let browser = null, failed = 0;
  for (const f of files) {
    const t = require(path.join(__dirname, f));
    if (t.browser && !browser) browser = await require('playwright').chromium.launch();
    const t0 = Date.now();
    try { await t.run(browser); console.log(`✔ ${t.name}  (${((Date.now() - t0) / 1000).toFixed(1)}s)`); }
    catch (e) { failed++; console.log(`✘ ${t.name}\n    ${e && e.stack ? e.stack.split('\n').slice(0, 3).join('\n    ') : e}`); }
  }
  if (browser) await browser.close();
  console.log(failed ? `\n${failed} failed` : `\nall ${files.length} passed`);
  process.exit(failed ? 1 : 0);
})();
