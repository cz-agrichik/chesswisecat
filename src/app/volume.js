/* app/volume.js — one book's page: all its puzzles as a grid of results. */
(function () {
  const { h, esc } = UI;
  const T = Texts;

  function volumeScreen(volId) {
    const pl = Progress.current(), vol = PuzzleSource.getVolume(volId);
    if (!vol) { App.show('home'); return null; }
    const st = Progress.volumeStats(pl, vol);
    const el = h(`<section class="page">
      <div class="packhead"><div class="cover" style="--c:${App.bookColor(vol)}"><span>${vol.index + 1}</span></div>
        <div><h1></h1><p class="muted"></p></div></div>
      <button class="btn wide" data-start></button>
      <div class="card vcard">
        <div class="vgrid"></div>
        <div class="legend"><span><i class="vc c2">★★</i> ${esc(T.t('legClean'))}</span><span><i class="vc c1">★</i> ${esc(T.t('legMistakes'))}</span><span><i class="vc c0">🌱</i> ${esc(T.t('legGuided'))}</span><span><i class="vc"></i> ${esc(T.t('legNone'))}</span></div>
      </div>
    </section>`);
    el.querySelector('h1').textContent = T.bookTitle(vol);
    el.querySelector('.packhead .muted').textContent = T.t('volStats', st.solved, st.n, st.clean);
    const grid = el.querySelector('.vgrid');
    vol.puzzles.forEach((z, i) => {
      const b = pl.best[z.id];
      const m = b === undefined ? ['', ''] : App.resultMark(b);
      const c = h(`<span class="vc ${m[0]}">${m[1]}</span>`);
      c.title = T.t('puzzleN', i + 1);
      grid.append(c);
    });
    const sb = el.querySelector('[data-start]');
    sb.textContent = T.t('solveBook');
    sb.onclick = () => { UI.sound.unlock(); App.play.start(vol); };
    return el;
  }

  App.screen('volume', volumeScreen);
})();
