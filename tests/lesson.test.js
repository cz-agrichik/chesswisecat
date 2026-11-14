/* A lesson from start to finish: a clean solve (2 points), a solve with a mistake
   (1 point), hint + mistakes → arrows (0 points) + replay, then the lesson is completed
   and the results screen shows. Also: history entries, the avatar in the play bar. */
const { assert, openApp, onePlayer, state, playWrong, solveRest, shot } = require('./helpers');

module.exports = {
  name: 'lesson: clean / mistake / arrows / lesson results',
  browser: true,
  async run(browser) {
    const p = await openApp(browser, { storage: onePlayer() });
    await p.click('.cta'); await p.waitForTimeout(1500);
    assert(await p.isVisible('.playbar .pav'), 'no avatar in the play bar');
    let s = await state(p);
    assert(/Find|What is/.test(s.say), 'first line is not the task: ' + s.say);

    s = await solveRest(p); await p.waitForTimeout(600);
    assert(s.phase === 'done', 'puzzle 1 not finished');
    assert((await p.$$('#sheet .starrow .on')).length === 2, 'clean solve should give 2 stars');
    await shot(p, 'play-clean');
    await p.click('[data-next]'); await p.waitForTimeout(1500);

    await playWrong(p); await p.waitForTimeout(300);
    assert((await state(p)).left === 2, 'a mistake should cost a heart');
    await solveRest(p); await p.waitForTimeout(600);
    assert((await p.$$('#sheet .starrow .on')).length === 1, 'solve with a mistake should give 1 star');
    await p.click('[data-next]'); await p.waitForTimeout(1500);

    await p.click('#hintBtn'); await p.waitForTimeout(200);
    await playWrong(p); await p.waitForTimeout(200); await playWrong(p); await p.waitForTimeout(1200);
    assert((await state(p)).guided, 'hint + 2 mistakes should switch to arrows');
    await solveRest(p); await p.waitForTimeout(600);
    assert(await p.isVisible('#sheet .sprout'), 'arrows → a sprout, no stars');
    await p.click('[data-replay]'); await p.waitForTimeout(6000);
    assert(await p.isVisible('#sheet'), 'the sheet comes back after the replay');

    await p.evaluate(() => { Progress.current().lesson.pts = 39; });
    await p.click('[data-next]'); await p.waitForTimeout(1500);
    await solveRest(p); await p.waitForTimeout(600);
    await p.click('[data-next]'); await p.waitForTimeout(500);
    assert(await p.isVisible('.results'), 'no results screen after 40 points');
    await shot(p, 'results', true);

    const pl = await p.evaluate(() => Progress.current());
    assert(pl.lessonsDone === 1 && pl.lesson === null, 'lesson not counted');
    assert(pl.history.length === 4 && pl.history.map(e => e.s).join() === '2,0,1,2', 'history: ' + pl.history.map(e => e.s));
    assert(pl.history[0].R === pl.rating, 'history keeps the rating after each puzzle');
    assert(!p.errors.length, p.errors.join('\n'));
    await p.close();
  },
};
