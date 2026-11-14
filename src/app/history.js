/* app/history.js — what the player solved and how it went: totals, a rating line and
   the last puzzles grouped by day. The data is player.history (game/progress.js keeps
   the last Progress.HISTORY_MAX puzzles). A row opens the puzzle on Lichess. */
(function () {
  const { h, esc } = UI;
  const T = Texts;

  function historyScreen() {
    const pl = Progress.current(), H = pl.history || [];
    const el = h('<section class="page history"><h1></h1></section>');
    el.querySelector('h1').textContent = T.t('histTitle', pl.name);
    const pct = pl.played ? Math.round(pl.clean / pl.played * 100) : 0;
    el.append(h(`<div class="meters card">
      <div class="meter"><b>✅ ${pl.played}</b><small>${esc(T.t('histSolved'))}</small></div>
      <div class="meter"><b>★★ ${pct}%</b><small>${esc(T.t('histCleanPct'))}</small></div>
      <div class="meter"><b>🏆 ${pl.bestRating}</b><small>${esc(T.t('histBest'))}</small></div>
    </div>`));
    if (!H.length) { el.append(h(`<p class="card hempty">${esc(T.t('histEmpty'))}</p>`)); return el; }
    el.append(ratingChart(H));
    el.append(h(`<p class="muted hlast">${esc(T.t('histLast', H.length))}</p>`));
    for (const g of byDay(H)) el.append(...dayBlock(g));
    return el;
  }

  /** Entries (newest first) grouped by calendar day. */
  function byDay(H) {
    const groups = [];
    for (const e of H) {
      const k = new Date(e.t).toDateString();
      if (!groups.length || groups[groups.length - 1].k !== k) groups.push({ k, items: [] });
      groups[groups.length - 1].items.push(e);
    }
    return groups;
  }

  function dayBlock(g) {
    const today = new Date().toDateString(), yest = new Date(Date.now() - 864e5).toDateString();
    const fmtDay = new Intl.DateTimeFormat(T.locale(), { weekday: 'short', day: 'numeric', month: 'long' });
    const fmtTime = new Intl.DateTimeFormat(T.locale(), { hour: '2-digit', minute: '2-digit', hour12: false });
    const first = g.items[g.items.length - 1], last = g.items[0];
    const clean = g.items.filter(e => e.s >= CONFIG.points.clean).length;
    const r0 = first.R - first.d, r1 = last.R;
    const head = h(`<div class="hday-h"><b></b><span></span><em class="${r1 > r0 ? 'up' : r1 < r0 ? 'down' : ''}">🏅 ${r0} → ${r1}</em></div>`);
    head.querySelector('b').textContent = g.k === today ? T.t('today') : g.k === yest ? T.t('yesterday') : fmtDay.format(new Date(last.t));
    head.querySelector('span').textContent = T.t('histDay', g.items.length, clean);
    const list = h('<div class="card hlist"></div>');
    for (const e of g.items) {
      const vol = PuzzleSource.getVolume(e.v), res = App.resultMark(e.s);
      const row = h(`<a class="hrow" target="_blank" rel="noopener" href="https://lichess.org/training/${encodeURIComponent(e.id)}">
        <small class="htime">${fmtTime.format(new Date(e.t))}</small>
        <i class="hdot" style="--c:${vol ? App.bookColor(vol) : 'var(--grey)'}"></i><span class="hbook"></span>
        <span class="hpr">${e.r}</span><span class="vc ${res[0]}" title="${esc(T.t(res[2]))}">${res[1]}</span>
        <em class="${e.d > 0 ? 'up' : e.d < 0 ? 'down' : ''}">${T.signed(e.d)}</em></a>`);
      row.querySelector('.hbook').textContent = vol ? T.bookTitle(vol) : e.v;
      list.append(row);
    }
    return [head, list];
  }

  /** Small rating line over the stored history (oldest → newest). */
  function ratingChart(H) {
    const pts = H.slice().reverse().map(e => e.R);
    pts.unshift(H[H.length - 1].R - H[H.length - 1].d);
    const W = 320, Hh = 90, pad = 6, lo = Math.min(...pts), hi = Math.max(...pts), span = Math.max(20, hi - lo);
    const x = i => pad + i * (W - 2 * pad) / Math.max(1, pts.length - 1);
    const y = v => Hh - pad - (v - lo) * (Hh - 2 * pad) / span;
    const d = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
    return h(`<div class="card hchart"><div class="hc-lbl"><b>🏅 ${pts[pts.length - 1]}</b><small>↑ ${hi} · ↓ ${lo}</small></div>
      <svg viewBox="0 0 ${W} ${Hh}" preserveAspectRatio="none" aria-hidden="true">
        <path d="${d}L${x(pts.length - 1).toFixed(1)},${Hh}L${x(0).toFixed(1)},${Hh}Z" class="hc-fill"/><path d="${d}" class="hc-line"/></svg></div>`);
  }

  App.screen('history', historyScreen);
})();
