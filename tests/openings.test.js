/* Openings: the list shows the studies; learning the Italian Game with a few mistakes:
   main move → on; another good move from the study → no life lost, arrow; a bad move →
   a life lost; a second bad move on the same move → arrow. Points: 3 for the main line
   + 2 per life left; the run goes to the history and to the lesson. Then a run where all
   lives are spent ("tour"): only the tour bonus. */
const { assert, openApp, onePlayer, shot } = require('./helpers');

const st = p => p.evaluate(() => { const r = App.openings.run(), c = r && r.ctrl; return c && { phase: c.phase, li: c.li, pos: c.pos, lives: c.lives, guide: c.guide, tour: c.tour, done: c.done, say: document.querySelector('#say').textContent }; });
const play = (p, kind) => p.evaluate(kind => {
  const c = App.openings.run().ctrl, n = c.node, s = c.board.state;
  let m;
  if (kind === 'main') m = n.move;
  else if (kind === 'alt') { const a = Pgn.alternatives(n)[0]; m = a && a.move; }
  else { const bad = new Set([n.uci].concat(Pgn.alternatives(n).map(a => a.uci))); m = ChessCore.legal(s).find(x => !bad.has(ChessCore.uci(x))); }
  if (!m) return false;
  c._attempt(m); return true;
}, kind);
async function waitPlayer(p) { for (let i = 0; i < 40; i++) { const s = await st(p); if (!s || s.phase === 'player' || s.phase === 'done') return s; await p.waitForTimeout(40); } return st(p); }
// at every move of the child the board must show the study's position (also after the
// moves were taken back for a new line)
const boardOk = p => p.evaluate(() => { const c = App.openings.run().ctrl; return !c.node || ChessCore.toFEN(c.board.state) === ChessCore.toFEN(c.node.parent.state); });
async function finishAll(p) {
  for (let i = 0; i < 80; i++) {
    const s = await waitPlayer(p); if (s.phase === 'done') return s;
    assert(await boardOk(p), `line ${s.li}: the board does not match the study`);
    await play(p, 'main'); await p.waitForTimeout(100);
  }
  return st(p);
}

module.exports = {
  name: 'openings: lives, good alternatives, points',
  browser: true,
  async run(browser) {
    const p = await openApp(browser, { storage: onePlayer() });
    // ten times faster: the pauses between moves are for children, not for tests
    await p.evaluate(() => { const orig = OpeningController.prototype.later; OpeningController.prototype.later = function (ms, fn) { return orig.call(this, ms / 10, fn); }; });
    await p.click('.opbtn'); await p.waitForTimeout(200);
    assert((await p.$$('.opcard')).length === 3, 'three openings in the list');
    await shot(p, 'openings-list');
    await p.click('.opcard >> nth=0'); await p.waitForTimeout(300);
    let s = await waitPlayer(p);
    assert(s.lives === 5 && s.li === 0, 'start: 5 lives, main line');

    await play(p, 'alt'); await p.waitForTimeout(20); s = await st(p);
    assert(s.lives === 5 && s.guide && s.phase === 'paused', 'another good move: no life lost, a short blink');
    assert(await p.evaluate(() => document.querySelector('#board').classList.contains('good')), 'the board blinks green');
    s = await waitPlayer(p);
    await play(p, 'bad'); await p.waitForTimeout(100);
    assert((await st(p)).lives === 5, 'a wrong move while the arrow is shown costs nothing');
    await play(p, 'main'); await p.waitForTimeout(100);

    s = await waitPlayer(p);
    await play(p, 'bad'); await p.waitForTimeout(100); s = await st(p);
    assert(s.lives === 4 && !s.guide, 'a bad move: one life lost, no arrow yet');
    await p.waitForTimeout(100); s = await waitPlayer(p);
    await play(p, 'bad'); await p.waitForTimeout(100); s = await st(p);
    assert(s.lives === 3 && s.guide, 'second bad move on the same move: life lost + arrow');
    await shot(p, 'opening-arrow');
    await play(p, 'main');

    s = await finishAll(p);
    assert(s.phase === 'done', 'the study should finish');
    await p.waitForTimeout(400);
    await shot(p, 'opening-done');
    const pl = await p.evaluate(() => Progress.current());
    const side = await p.evaluate(() => App.openings.run().ctrl.lines.length - 1), full = 3 + side + 3 * 2;
    assert(pl.points === full, `points: 3 for the main line + 1 × ${side} other lines + 2 × 3 lives = ${full}, got ` + pl.points);
    assert(pl.history[0].k === 'o' && pl.history[0].id === 'italian' && pl.history[0].s === full, 'history entry: ' + JSON.stringify(pl.history[0]));
    assert(pl.openings.italian.best === full && pl.lesson.pts === full, 'best result and lesson points');

    // a run that spends all lives
    await p.click('[data-again]'); await p.waitForTimeout(300);
    for (let k = 0; k < 5; k++) { s = await waitPlayer(p); await play(p, 'bad'); await p.waitForTimeout(80); s = await st(p); if (s.guide && !s.tour) await play(p, 'main'); }
    s = await st(p);
    assert(s.tour && s.lives === 0, 'after 5 mistakes: arrows mode');
    s = await finishAll(p); await p.waitForTimeout(400);
    const pl2 = await p.evaluate(() => Progress.current());
    assert(pl2.history[0].r === 2 && pl2.history[0].s === 0, 'all lives spent: 2 for the run, but more already earned in 12 h → +0, got ' + JSON.stringify(pl2.history[0]));
    assert(pl2.points === full && pl2.openings.italian.n === 2 && pl2.openings.italian.best === full, 'two runs, nothing new, best kept');
    // within the window only the new points; after 12 hours the full points again
    const w = await p.evaluate(full => {
      const pl = Progress.current(), a = Progress.recordOpening(pl, 'italian', full + 2);
      pl.openings.italian.t0 -= 13 * 3600e3;
      const b = Progress.recordOpening(pl, 'italian', 5);
      return [a.award, b.award, pl.openings.italian.got];
    }, full);
    assert(w.join() === '2,5,5', 'points window: ' + w.join());

    await p.click('[data-next]'); await p.waitForTimeout(200);
    await p.click('.topbar .icon-btn[title]'); await p.waitForTimeout(200);
    await shot(p, 'history-openings');
    assert((await p.$$('.hrow.op')).length === 4, 'four opening runs in the history');
    assert(!p.errors.length, p.errors.join('\n'));
    await p.close();
  },
};
