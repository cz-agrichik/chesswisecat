/* tests/helpers.js — shared bits for the browser tests (Playwright + Chromium).
   The page is opened from disk (file://), Google Fonts are blocked so tests don't
   depend on the network, and every test starts with its own localStorage. */
const path = require('path'), fs = require('fs');
const ROOT = path.resolve(__dirname, '..');
const URL = require('url').pathToFileURL(path.join(ROOT, 'index.html')).href;
const OUT = path.join(__dirname, 'out');
fs.mkdirSync(OUT, { recursive: true });

function assert(cond, msg) { if (!cond) throw new Error(msg); }

/** A fresh page; `storage` (optional) is written to localStorage before the app starts. */
async function openApp(browser, { width = 360, height = 740, storage = null } = {}) {
  const page = await browser.newPage({ viewport: { width, height } });
  page.errors = [];
  page.on('pageerror', e => page.errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/ERR_|fonts/.test(m.text())) page.errors.push(m.text()); });
  await page.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await page.goto(URL);
  await page.evaluate(s => { localStorage.clear(); if (s) localStorage.setItem('chesswisecat.v1', JSON.stringify(s)); }, storage);
  await page.reload();
  await page.waitForTimeout(300);
  return page;
}
/** A saved state with one player (rating 120, no pause after mistakes). */
const onePlayer = (extra = {}) => ({ players: [Object.assign({ id: 'p1', v: 2, name: 'Тёма', avatar: '🐱', rating: 120, best: {}, recent: [], pauseSec: 0, lang: 'en' }, extra)], currentId: 'p1' });

/* ---- driving a puzzle ---- */
const state = page => page.evaluate(() => { const s = App.debug().session, pc = s.puzzle; return { phase: pc.phase, ply: pc.ply, left: pc.left, guided: pc.guided, say: document.querySelector('#say').textContent, id: s.z.id }; });
const playRight = page => page.evaluate(() => { const pc = App.debug().session.puzzle; pc._attempt(ChessCore.findMove(pc.board.state, pc.p.moves[pc.ply])); });
const playWrong = page => page.evaluate(() => {
  const pc = App.debug().session.puzzle, exp = pc.p.moves[pc.ply];
  const m = ChessCore.legal(pc.board.state).find(x => ChessCore.uci(x) !== exp && ChessCore.status(ChessCore.make(pc.board.state, x)) !== 'mate');
  pc._attempt(m);
});
async function solveRest(page) {
  for (let i = 0; i < 12; i++) {
    const s = await state(page);
    if (s.phase === 'done') return s;
    if (s.phase === 'player') await playRight(page);
    await page.waitForTimeout(1200);
  }
  return state(page);
}
const shot = (page, name, full = false) => page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: full });

module.exports = { ROOT, URL, OUT, assert, openApp, onePlayer, state, playRight, playWrong, solveRest, shot };
