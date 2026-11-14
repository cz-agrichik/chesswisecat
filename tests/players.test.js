/* Players: the first player is created in Greek as a boy; the language changes the
   whole interface; a returning player keeps it; another player is added; deleting
   needs the name typed in; deleting the last player opens "new player". */
const { assert, openApp, shot } = require('./helpers');

module.exports = {
  name: 'players: languages, gender, edit, delete',
  browser: true,
  async run(browser) {
    const p = await openApp(browser);
    assert(await p.isVisible('.modal'), 'first run should open "new player"');
    await p.click('.lang .segb[data-l="el"]'); await p.waitForTimeout(150);
    assert((await p.innerText('.modal h2')).includes('Νέος'), 'the form should switch to Greek');
    await p.click('.gen .segb[data-g="m"]');
    await p.fill('input[name=nm]', 'Νίκος'); await p.click('.avb[data-i="3"]');
    await shot(p, 'player-new-el');
    await p.click('button[type=submit]'); await p.waitForTimeout(300);
    assert((await p.innerText('.cta')).includes('Λύσε'), 'home should be in Greek');
    const me = await p.evaluate(() => Progress.current());
    assert(me.lang === 'el' && me.gender === 'm' && me.avatar === '🦄', 'settings not saved: ' + JSON.stringify([me.lang, me.gender, me.avatar]));

    // second player in Russian
    await p.click('.chip'); await p.click('.pcard.add'); await p.waitForTimeout(150);
    await p.click('.lang .segb[data-l="ru"]'); await p.waitForTimeout(150);
    await p.fill('input[name=nm]', 'Маша'); await p.click('.gen .segb[data-g="f"]');
    await p.click('button[type=submit]'); await p.waitForTimeout(300);
    assert((await p.innerText('.cta')).includes('Решать'), 'home should be in Russian');

    // switching players switches the language
    await p.click('.chip'); await p.waitForTimeout(150);
    await p.click('.pcard-wrap:nth-child(1) .pcard'); await p.waitForTimeout(200);
    assert((await p.innerText('.cta')).includes('Λύσε'), 'back to the Greek player → Greek');

    // delete Маша: the button stays off until the name is typed
    await p.click('.chip'); await p.click('.pcard-wrap:nth-child(2) .pedit'); await p.click('[data-del]'); await p.waitForTimeout(150);
    assert(await p.isDisabled('.modal [type=submit]'), 'delete must be disabled before typing the name');
    await p.fill('.modal input[name=nm]', 'маш');
    assert(await p.isDisabled('.modal [type=submit]'), 'a wrong name must not enable delete');
    await p.fill('.modal input[name=nm]', ' маша ');
    assert(!(await p.isDisabled('.modal [type=submit]')), 'the right name (any case) enables delete');
    await shot(p, 'player-delete');
    await p.click('.modal [type=submit]'); await p.waitForTimeout(300);
    const left = await p.evaluate(() => Progress.state.players.map(x => x.name));
    assert(left.join() === 'Νίκος', 'after delete: ' + left);

    // delete the last one → "new player" opens
    await p.click('.pedit'); await p.click('[data-del]'); await p.fill('.modal input[name=nm]', 'Νίκος');
    await p.click('.modal [type=submit]'); await p.waitForTimeout(400);
    assert(await p.isVisible('.modal input[name=nm]'), 'no players left → the new-player form');
    const saved = await p.evaluate(() => JSON.parse(localStorage.getItem('chesswisecat.v1')));
    assert(saved.players.length === 0 && Object.keys(saved.deleted).length === 2, 'deletions not saved');
    assert(!p.errors.length, p.errors.join('\n'));
    await p.close();
  },
};
