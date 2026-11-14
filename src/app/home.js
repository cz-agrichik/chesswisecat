/* app/home.js — the home screen: the cat, the big Solve button, the counters and
   the bookcase with all the books. */
(function () {
  const { h, esc } = UI;
  const T = Texts;

  function metersEl(pl) {
    return h(`<div class="meters card">
      <div class="meter"><b>🏅 ${pl.rating}</b><small>${esc(T.t('rating'))}</small></div>
      <div class="meter"><b>⭐ ${pl.points}</b><small>${esc(T.word('pointsW', pl.points))}</small></div>
      <div class="meter"><b>🎓 ${pl.lessonsDone}</b><small>${esc(T.word('lessonsW', pl.lessonsDone))}</small></div>
    </div>`);
  }

  function homeScreen() {
    const pl = Progress.current(), vols = PuzzleSource.getVolumes(), all = App.allBooks();
    const L = App.lessonView(pl), GOAL = App.GOAL;
    const el = h(`<section class="home">
      <h1 class="title"></h1>
      <div class="study">${UI.cat('big')}<div class="bubble" id="catSay"></div></div>
      <button class="cta" data-go><span class="cta-play" aria-hidden="true"></span><span class="cta-txt"><b>${esc(T.t('solve'))}</b><small></small></span></button>
      <div class="bookcase"><div class="bc-top">${esc(T.t('shelf'))}</div><div class="bc-body"></div></div>
    </section>`);
    el.querySelector('.title').textContent = T.t('appName');
    el.querySelector('.cta').after(metersEl(pl));
    el.querySelector('#catSay').textContent = !all ? T.t('soonPuzzles') : pl.played ? T.cat.welcomeBack(pl.name) : T.cat.hello(pl.name, GOAL);
    const cta = el.querySelector('[data-go]');
    if (all) {
      cta.querySelector('small').textContent = T.t('lessonProgress', L.num, L.pts, GOAL);
      cta.onclick = () => { UI.sound.unlock(); App.play.start(all); };
    } else { cta.disabled = true; cta.querySelector('small').textContent = T.t('noPuzzles'); }

    // bookcase — grows with the number of books; the last slot always hints at more to come
    const body = el.querySelector('.bc-body');
    // usable shelf width, mirroring the CSS: one column on phones, half the page on landscape tablets
    const cw = document.documentElement.clientWidth;
    const twoCol = window.matchMedia && matchMedia('(min-width: 900px) and (orientation: landscape)').matches;
    const width = (twoCol ? (Math.min(1060, cw - 32) - 32) / 2 : Math.min(560, cw - 32)) - 36;
    const perShelf = Math.max(3, Math.min(8, Math.floor((width - 12 + 6) / 56)));
    // the "soon" slot and the plant only go where there is room: never a shelf of their own
    const items = vols.map(v => bookEl(v, pl));
    if (items.length % perShelf !== 0) items.push(h(`<div class="book soon" aria-label="${esc(T.t('soonBook'))}"><span class="book-num">…</span><span class="book-cap">${esc(T.t('soon'))}</span></div>`));
    for (let i = 0; i < items.length; i += perShelf) {
      const shelf = h('<div class="shelf"></div>');
      items.slice(i, i + perShelf).forEach(b => shelf.append(b));
      body.append(shelf);
    }
    const last = body.lastElementChild;
    if (last && last.children.length < perShelf) last.append(h('<span class="deco" aria-hidden="true">🪴</span>'));
    return el;
  }

  function bookEl(vol, pl) {
    const st = Progress.volumeStats(pl, vol), c = App.bookColor(vol);
    const b = h(`<button class="book tome" style="--c:${c};--sp:${App.spineInk(c)}">
      <span class="book-band"></span><span class="book-spine"></span><span class="book-cap">${Math.round(st.solved / st.n * 100)}%</span><span class="book-band low"></span>
    </button>`);
    b.querySelector('.book-spine').textContent = T.bookShort(vol);
    b.setAttribute('aria-label', T.t('bookAria', T.bookTitle(vol), st.solved, st.n));
    b.onclick = () => App.go('volume', vol.id);
    return b;
  }

  App.screen('home', homeScreen);
})();
