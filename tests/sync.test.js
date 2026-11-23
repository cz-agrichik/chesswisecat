/* Syncing between devices (game/cloud.js), fed with fake database snapshots: a newer
   record from another device that has lost the history must not wipe it here; history
   and best results from both sides are joined; deleted players stay deleted. */
const { assert, openApp, onePlayer } = require('./helpers');

module.exports = {
  name: 'sync: history is never wiped by a stale device',
  browser: true,
  async run(browser) {
    const now = Date.now();
    const H = [3, 2, 1].map(i => ({ t: now - i * 60000, id: 'z' + i, v: 'fork', r: 500, s: 2, d: 5, R: 120 + i }));
    const p = await openApp(browser, { storage: onePlayer({ history: H, best: { z1: 2, z2: 2, z3: 2 }, updatedAt: now - 1000 }) });
    const r = await p.evaluate(({ now }) => {
      const snap = docs => ({ metadata: { fromCache: false }, docs: docs.map(([id, data]) => ({ id, exists: true, data: () => data })) });
      const base = JSON.parse(JSON.stringify(Progress.current())); delete base.id; delete base.synced;
      const out = {};
      // 1) another device pushed a newer record without the history (stale copy)
      Cloud._merge.onSnap(snap([['p1', Object.assign({}, base, { rating: 777, history: [], best: {}, updatedAt: now + 5000 })]]));
      let pl = Progress.current();
      out.afterStale = { rating: pl.rating, hist: pl.history.length, best: Object.keys(pl.best).length };
      // 2) another device solved a different puzzle meanwhile
      const other = { t: now + 1000, id: 'z9', v: 'pin', r: 600, s: 1, d: -3, R: 774 };
      Cloud._merge.onSnap(snap([['p1', Object.assign({}, base, { rating: 774, history: [other], best: { z9: 1 }, updatedAt: now + 9000 })]]));
      pl = Progress.current();
      out.afterOther = { rating: pl.rating, ids: pl.history.map(e => e.id).join(), best: Object.keys(pl.best).sort().join() };
      // 3) a tombstone removes the player
      Cloud._merge.onSnap(snap([['p1', { deleted: true, updatedAt: now + 20000 }]]));
      out.afterDelete = Progress.state.players.length;
      return out;
    }, { now });
    assert(r.afterStale.rating === 777, 'the newer rating should be taken: ' + r.afterStale.rating);
    assert(r.afterStale.hist === 3 && r.afterStale.best === 3, 'history/best wiped by a stale device: ' + JSON.stringify(r.afterStale));
    assert(r.afterOther.ids === 'z9,z1,z2,z3', 'histories should be joined, newest first: ' + r.afterOther.ids);
    assert(r.afterOther.best === 'z1,z2,z3,z9', 'best results should be joined: ' + r.afterOther.best);
    assert(r.afterDelete === 0, 'a tombstone should remove the player');
    assert(!p.errors.length, p.errors.join('\n'));
    await p.close();
  },
};
