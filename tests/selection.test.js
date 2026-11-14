/* Puzzle choice by rating (CONFIG.ratingWindow): full weight inside the target window,
   half one step out, a quarter two steps out, never further. Also a quick look at what
   a player of a given rating actually gets from all books together. */
const { assert, openApp, onePlayer } = require('./helpers');

module.exports = {
  name: 'selection: rating window',
  browser: true,
  async run(browser) {
    const p = await openApp(browser, { storage: onePlayer() });
    const r = await p.evaluate(() => {
      const W = CONFIG.ratingWindow, x = 500, w = r => PuzzleSource.ratingWeight(r, x);
      const lo = x + W.low, hi = x + W.high, st = W.step;
      const checks = {
        inside: [w(lo), w(hi), w((lo + hi) / 2)],
        half: [w(lo - 1), w(lo - st), w(hi + 1), w(hi + st)],
        quarter: [w(lo - st - 1), w(lo - 2 * st), w(hi + st + 1), w(hi + 2 * st)],
        never: [w(lo - 2 * st - 1), w(hi + 2 * st + 1)],
      };
      const pl = { rating: 700, best: {}, recent: [] }, mix = PuzzleSource.getMixed();
      let inWin = 0; for (let i = 0; i < 4000; i++) { const z = PuzzleSource.pickNext(mix, pl); if (z.rating >= 700 + W.low && z.rating <= 700 + W.high) inWin++; }
      return { checks, inWin: inWin / 4000 };
    });
    assert(r.checks.inside.every(v => v === 1), 'inside the window → 1: ' + r.checks.inside);
    assert(r.checks.half.every(v => v === 0.5), 'one step out → ½: ' + r.checks.half);
    assert(r.checks.quarter.every(v => v === 0.25), 'two steps out → ¼: ' + r.checks.quarter);
    assert(r.checks.never.every(v => v === 0), 'further → 0: ' + r.checks.never);
    assert(r.inWin > 0.5, 'most picks should be inside the window, got ' + r.inWin);
    await p.close();
  },
};
