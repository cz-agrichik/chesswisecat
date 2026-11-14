/* app/results.js — the end of a lesson: points, puzzles, clean solves, rating change. */
(function () {
  const { h, esc } = UI;
  const T = Texts;

  function resultsScreen(run) {
    if (!run) { App.show('home'); return null; }
    const d = run.r1 - run.r0;
    const el = h(`<section class="page results">
      <h1 class="big"></h1>
      <div class="study">${UI.cat()}<div class="bubble"></div></div>
      <div class="stats">
        <div class="card stat"><b>⭐ ${run.pts}</b><span>${esc(T.word('pointsW', run.pts))}</span></div>
        <div class="card stat"><b>${run.n}</b><span>${esc(T.word('puzzlesW', run.n))}</span></div>
        <div class="card stat"><b>${run.clean}</b><span>${esc(T.t('noMistakes'))}</span></div>
      </div>
      <div class="card rating-line"><span>🏅 ${esc(T.t('ratingCap'))}</span><b>${run.r0} → ${run.r1}</b><em class="${d > 0 ? 'up' : d < 0 ? 'down' : ''}">${T.signed(d)}</em></div>
      <div class="row2" style="margin-top:18px"><button class="btn ghost" data-home>${esc(T.t('toShelf'))}</button><button class="btn" data-next>${esc(T.t('nextLesson'))}</button></div>
    </section>`);
    el.querySelector('.big').textContent = T.t('lessonPassed', run.num);
    el.querySelector('.bubble').textContent = T.t(run.clean === run.n ? 'resAllClean' : d > 0 ? 'resUp' : 'resGood');
    el.querySelector('[data-home]').onclick = () => App.go('home');
    el.querySelector('[data-next]').onclick = () => App.play.start(run.vol);
    return el;
  }

  App.screen('results', resultsScreen);
})();
