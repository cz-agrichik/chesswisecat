/* Screenshots of every screen on a phone and a landscape tablet, in all languages —
   for a human to look at (tests/out/). Fails only on page errors or a page wider than
   the screen. */
const { assert, openApp, onePlayer, shot } = require('./helpers');

module.exports = {
  name: 'screens: phone + tablet, every language',
  browser: true,
  async run(browser) {
    for (const [w, h] of [[360, 740], [1180, 820]]) {
      for (const lang of ['en', 'ru', 'el']) {
        const p = await openApp(browser, { width: w, height: h, storage: onePlayer({ lang }) });
        // some history to look at
        await p.evaluate(() => {
          const pl = Progress.current(), vols = PuzzleSource.getVolumes(); let R = 120; const now = Date.now();
          pl.history = Array.from({ length: 30 }, (_, i) => { const v = vols[i % vols.length], z = v.puzzles[i], s = [2, 2, 1, 0][i % 4], d = s === 2 ? 9 : -5; R += d; return { t: now - (30 - i) * 5400e3, id: z.id, v: v.id, r: z.rating, s, d, R }; }).reverse();
          pl.played = 30; pl.clean = 15; pl.rating = R; pl.bestRating = R; Progress.save();
        });
        await p.reload(); await p.waitForTimeout(300);
        const tag = `${lang}-${w}`;
        await shot(p, `home-${tag}`, true);
        const wide = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        assert(!wide, `${tag}: the home page is wider than the screen`);
        await p.click('.topbar .icon-btn[title]'); await p.waitForTimeout(200); await shot(p, `history-${tag}`);
        await p.click('.topbar .icon-btn:not([title])'); await p.waitForTimeout(200);
        await p.click('.book.tome'); await p.waitForTimeout(200); await shot(p, `volume-${tag}`);
        await p.click('[data-start]'); await p.waitForTimeout(1500); await shot(p, `play-${tag}`);
        await p.click('[data-quit]'); await p.click('[data-yes]'); await p.waitForTimeout(200);
        await p.click('.chip'); await p.click('.pedit'); await p.waitForTimeout(200); await shot(p, `edit-${tag}`);
        assert(!p.errors.length, `${tag}: ${p.errors.join('\n')}`);
        await p.close();
      }
    }
  },
};
