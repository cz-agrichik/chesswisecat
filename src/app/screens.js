/* app/screens.js — the screens and the router. Glues PuzzleSource, Progress,
   BoardController and PuzzleController together; owns no chess logic itself.

   Flow: shelf (home) → volume page → lesson. A lesson is endless puzzles picked by
   PuzzleSource.pickNext until CONFIG.lessonGoal points are collected; the lesson's
   progress lives in the player record, so leaving and coming back continues it. */
const App = (function () {
  const { h, esc, $ } = UI;
  const T = Texts;
  const BOOK_COLORS = ['#FF8A7A', '#6CCB8C', '#72C8F2', '#B7A6F2', '#FFC83D', '#FF7396', '#4FC2B4', '#F59E5B'];
  const bookColor = i => BOOK_COLORS[i % BOOK_COLORS.length];
  const GOAL = CONFIG.lessonGoal;

  let screen = 'home';
  let session = null;     // active lesson run
  let screenArg = null;

  function go(name, arg) {
    if (screen === 'play' && name !== 'play') endPlay();
    screen = name; screenArg = arg; render(); window.scrollTo(0, 0);
  }
  function render() {
    const app = $('#app'); app.innerHTML = '';
    if (!Progress.current() && screen !== 'players') screen = 'players';
    if (screen !== 'play') app.append(topbar());
    const fn = { home: homeScreen, players: playersScreen, volume: volumeScreen, play: playScreen, results: resultsScreen }[screen] || homeScreen;
    app.append(fn(screenArg));
  }
  function refresh() { if (screen !== 'play' && !document.querySelector('.modal-bd')) render(); }

  const lessonView = pl => pl.lesson || { num: pl.lessonsDone + 1, pts: 0, n: 0, clean: 0 };
  const firstVolume = () => (PuzzleSource.getVolumes().length ? PuzzleSource.getMixed() : null);

  /* ---------- top bar ---------- */
  function topbar() {
    const pl = Progress.current();
    const bar = h('<header class="topbar"></header>');
    if (pl) {
      const chip = h(`<button class="chip" aria-label="Игроки"><span class="av">${pl.avatar}</span><span class="name"></span></button>`);
      chip.querySelector('.name').textContent = pl.name;
      chip.onclick = () => go('players');
      bar.append(chip);
    }
    bar.append(h('<span class="spacer"></span>'));
    if (screen !== 'home' && pl) { const b = h('<button class="icon-btn" aria-label="На главную">🏠</button>'); b.onclick = () => go('home'); bar.append(b); }
    const snd = h(`<button class="icon-btn" aria-label="Звук">${Progress.state.muted ? '🔇' : '🔊'}</button>`);
    snd.onclick = () => { Progress.setMuted(!Progress.state.muted); UI.sound.setMuted(Progress.state.muted); snd.textContent = Progress.state.muted ? '🔇' : '🔊'; };
    bar.append(snd);
    return bar;
  }

  function metersEl(pl) {
    const el = h(`<div class="meters card">
      <div class="meter"><b>🏅 ${pl.rating}</b><small>рейтинг</small></div>
      <div class="meter"><b>⭐ ${pl.points}</b><small>${T.plural(pl.points, 'очко', 'очка', 'очков')}</small></div>
      <div class="meter"><b>🎓 ${pl.lessonsDone}</b><small>${T.plural(pl.lessonsDone, 'урок', 'урока', 'уроков')}</small></div>
    </div>`);
    return el;
  }

  /* ---------- home: the cat's bookcase ---------- */
  function homeScreen() {
    const pl = Progress.current(), vols = PuzzleSource.getVolumes(), vol = firstVolume();
    const L = lessonView(pl);
    const el = h(`<section class="home">
      <h1 class="title"></h1>
      <div class="study">${UI.cat('big')}<div class="bubble" id="catSay"></div></div>
      <button class="cta" data-go><span class="cta-play" aria-hidden="true"></span><span class="cta-txt"><b>Решать</b><small></small></span></button>
      <div class="bookcase"><div class="bc-top">Полка задач</div><div class="bc-body"></div></div>
    </section>`);
    el.querySelector('.title').textContent = CONFIG.appName;
    el.querySelector('.cta').after(metersEl(pl));
    el.querySelector('#catSay').textContent = !vol ? 'Задачи скоро появятся!' : pl.played ? T.cat.welcomeBack(pl.name) : T.cat.hello(pl.name, GOAL);
    const cta = el.querySelector('[data-go]');
    if (vol) {
      cta.querySelector('small').textContent = `Урок ${L.num}: ${L.pts} из ${GOAL} очков`;
      cta.onclick = () => { UI.sound.unlock(); startLesson(vol); };
    } else { cta.disabled = true; cta.querySelector('small').textContent = 'Задач пока нет'; }

    // bookcase — grows with the number of volumes; the last slot always hints at more to come
    const body = el.querySelector('.bc-body');
    // usable shelf width, mirroring the CSS: one column on phones, half the page on landscape tablets
    const cw = document.documentElement.clientWidth;
    const twoCol = window.matchMedia && matchMedia('(min-width: 900px) and (orientation: landscape)').matches;
    const width = (twoCol ? (Math.min(1060, cw - 32) - 32) / 2 : Math.min(560, cw - 32)) - 36;
    const perShelf = Math.max(3, Math.min(7, Math.floor((width - 12 + 8) / 68)));
    // the "soon" slot and the plant only go where there is room: never a shelf of their own
    const items = vols.map((v, i) => bookEl(v, i, pl));
    if (items.length % perShelf !== 0) items.push(h(`<div class="book soon" aria-label="Скоро новая книга"><span class="book-num">…</span><span class="book-cap">скоро</span></div>`));
    for (let i = 0; i < items.length; i += perShelf) {
      const shelf = h('<div class="shelf"></div>');
      items.slice(i, i + perShelf).forEach(b => shelf.append(b));
      body.append(shelf);
    }
    const last = body.lastElementChild;
    if (last && last.children.length < perShelf) last.append(h('<span class="deco" aria-hidden="true">🪴</span>'));
    return el;
  }
  function bookEl(vol, i, pl) {
    const st = Progress.volumeStats(pl, vol);
    const b = h(`<button class="book tome" style="--c:${bookColor(i)}">
      <span class="book-band"></span><span class="book-spine"></span><span class="book-cap">${Math.round(st.solved / st.n * 100)}%</span><span class="book-band low"></span>
    </button>`);
    b.querySelector('.book-spine').textContent = vol.short;
    b.setAttribute('aria-label', `${vol.title}: решено ${st.solved} из ${st.n}`);
    b.onclick = () => go('volume', vol.id);
    return b;
  }

  /* ---------- volume page: all puzzles with ticks ---------- */
  function volumeScreen(volId) {
    const pl = Progress.current(), vol = PuzzleSource.getVolume(volId);
    if (!vol) return homeScreen();
    const st = Progress.volumeStats(pl, vol), L = lessonView(pl), P = CONFIG.points;
    const el = h(`<section class="page">
      <div class="packhead"><div class="cover" style="--c:${bookColor(vol.index)}"><span>${vol.index + 1}</span></div>
        <div><h1></h1><p class="muted"></p></div></div>
      <button class="btn wide" data-start></button>
      <div class="card vcard">
        <div class="vgrid"></div>
        <div class="legend"><span><i class="vc c2">★★</i> без ошибок</span><span><i class="vc c1">★</i> с ошибками</span><span><i class="vc c0">🌱</i> по стрелочкам</span><span><i class="vc"></i> ещё не было</span></div>
      </div>
    </section>`);
    el.querySelector('h1').textContent = vol.title;
    el.querySelector('.packhead .muted').textContent = `Решено ${st.solved} из ${st.n}, без ошибок ${st.clean}`;
    const grid = el.querySelector('.vgrid');
    vol.puzzles.forEach((z, i) => {
      const b = pl.best[z.id];
      const cls = b === undefined ? '' : b >= P.clean ? 'c2' : b >= P.withMistakes ? 'c1' : 'c0';
      const c = h(`<span class="vc ${cls}">${b === undefined ? '' : b >= P.clean ? '★★' : b >= P.withMistakes ? '★' : '🌱'}</span>`);
      c.title = `Задача ${i + 1}`;
      grid.append(c);
    });
    const sb = el.querySelector('[data-start]');
    sb.textContent = `Решать задачи из этой книги`;
    sb.onclick = () => { UI.sound.unlock(); startLesson(vol); };
    return el;
  }

  /* ---------- play ---------- */
  function startLesson(vol) {
    const pl = Progress.current();
    endPlay();
    session = { vol, board: null, puzzle: null, z: null };
    Progress.markBusy(pl.id, true);
    screen = 'play'; screenArg = null; render(); window.scrollTo(0, 0);
    loadPuzzle();
  }
  function endPlay() {
    if (!session) return;
    if (session.puzzle) session.puzzle.dispose();
    if (session.board) session.board.destroy();
    session.puzzle = null; session.board = null;
    const pl = Progress.current(); if (pl) Progress.markBusy(pl.id, false);
  }

  function playScreen() {
    const el = h(`<section class="play">
      <header class="playbar">
        <button class="icon-btn" data-quit aria-label="Выйти">✕</button>
        <div class="ptrack"><div class="ptxt"><b></b><span></span></div><div class="bar"><i></i></div></div>
        <div class="hearts" aria-label="Попытки"></div>
      </header>
      <div class="arena">
        <div id="board"></div>
        <div class="side">
          <div class="study">${UI.cat()}<div class="bubble" id="say" aria-live="polite"></div></div>
          <div class="tools" id="tools"><button class="btn ghost" id="hintBtn">💡 Подсказка <small>−1 ❤</small></button><div class="score" aria-label="Рейтинг">🏅 <b id="rating"></b></div></div>
          <div class="sheet card" id="sheet" hidden></div>
        </div>
      </div>
    </section>`);
    el.querySelector('[data-quit]').onclick = () => UI.confirm('Выйти? Очки урока сохранятся.', 'Выйти', () => go('home'));
    el.querySelector('#hintBtn').onclick = onHint;
    session.board = new BoardController(el.querySelector('#board'));
    return el;
  }

  function say(text) { const b = $('#say'); if (!b) return; b.textContent = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  function updateHeader(L) {
    const pl = Progress.current();
    L = L || lessonView(pl);
    $('.ptxt b').textContent = `Урок ${L.num}`;
    $('.ptxt span').textContent = `⭐ ${Math.min(L.pts, GOAL)} из ${GOAL}`;
    $('.ptrack .bar i').style.width = Math.min(100, Math.round(L.pts / GOAL * 100)) + '%';
    $('#rating').textContent = pl.rating;
  }
  function updateHearts(left, animate) {
    const el = $('.hearts'), tries = CONFIG.triesBeforeAnswer;
    el.innerHTML = Array.from({ length: tries }, (_, i) => UI.heart(i < left ? 'full' : 'lost')).join('');
    if (animate) { const s = el.querySelectorAll('svg')[left]; if (s) s.classList.add('lose'); }
  }

  function loadPuzzle() {
    const pl = Progress.current();
    const z = session.z = PuzzleSource.pickNext(session.vol, pl);
    if (session.puzzle) session.puzzle.dispose();
    $('#sheet').hidden = true; $('#tools').hidden = false; $('#hintBtn').disabled = true;
    updateHeader(); updateHearts(CONFIG.triesBeforeAnswer);
    if (!z) { say('Задачи скоро появятся!'); return; }
    const pc = session.puzzle = new PuzzleController(session.board, z, {
      tries: CONFIG.triesBeforeAnswer,
      onEvent: (type, data) => {
        if (type === 'intro') say(T.cat.opponent());
        else if (type === 'your-turn') { $('#hintBtn').disabled = !pc.canHint(); say(data.first ? T.goal(z, pc.player) : T.cat.continueTurn()); }
        else if (type === 'correct') { $('#hintBtn').disabled = true; UI.sound.good(); say(T.cat.correct()); }
        else if (type === 'wrong') { UI.sound.bad(); UI.vibrate(90); updateHearts(pc.left, true); say(T.cat.wrong(data.left)); }
        else if (type === 'hint') { updateHearts(pc.left, true); say(data.level === 1 ? T.cat.hint1(data.piece, data.left) : T.cat.hint2()); $('#hintBtn').disabled = !pc.canHint(); }
        else if (type === 'guided') { UI.sound.bad(); UI.vibrate(90); updateHearts(0, true); $('#hintBtn').disabled = true; say(T.cat.guided()); }
        else if (type === 'guide-turn') { if (!data.first) say(T.cat.guideTurn()); }
        else if (type === 'guide-wrong') { UI.vibrate(40); say(T.cat.guideWrong()); }
        else if (type === 'done') onDone(z, data);
        else if (type === 'replay-start') { $('#sheet').hidden = true; $('#tools').hidden = false; $('#hintBtn').disabled = true; say(T.cat.replay()); }
        else if (type === 'replay-done') { $('#sheet').hidden = false; $('#tools').hidden = true; say(T.cat.replayDone()); }
        else if (type === 'broken') { console.warn('Puzzle could not be played:', z.id); loadPuzzle(); }
      },
    });
    pc.start();
  }
  function onHint() {
    const pc = session && session.puzzle; if (!pc) return;
    UI.sound.unlock();
    pc.hint();
  }

  function onDone(z, result) {
    const pl = Progress.current();
    const rec = Progress.record(pl, z, result);
    const kind = result.guided ? 'shown' : result.mistakes || result.hints ? 'mistakes' : 'clean';
    $('#hintBtn').disabled = true;
    updateHeader(rec.lesson);
    setTimeout(() => {
      if (screen !== 'play' || !session || session.z !== z) return;
      if (kind !== 'shown') { UI.sound.win(); UI.confetti(kind === 'clean' ? 110 : 50); UI.vibrate(40); }
      say(rec.lessonDone ? T.cat.lessonDone() : T.cat.done(kind, z));
      const dCls = rec.delta > 0 ? 'up' : rec.delta < 0 ? 'down' : '';
      const badge = kind === 'shown'
        ? '<span class="sprout" aria-hidden="true">🌱</span>'
        : Array.from({ length: rec.points }, () => UI.star('on')).join('');
      const sh = $('#sheet');
      sh.innerHTML = `<div class="res-row">
          <div class="starrow ${kind}" role="img" aria-label="${kind === 'shown' ? 'Решение разобрано' : '+' + T.points(rec.points)}">${badge}</div>
          <div class="res-rating"><small>рейтинг</small><b>${rec.rating}</b><em class="${dCls}">${T.signed(rec.delta)}</em></div>
        </div>
        <div class="row2">${kind === 'shown' ? '<button class="btn ghost" data-replay>Ещё раз</button>' : ''}<button class="btn" data-next>${rec.lessonDone ? 'Итоги урока' : kind === 'shown' ? 'Дальше' : 'Следующая задача'}</button></div>`;
      sh.querySelectorAll('.starrow .on').forEach((s, i) => { s.style.animationDelay = (i * 0.18) + 's'; });
      sh.hidden = false; $('#tools').hidden = true;
      sh.querySelector('[data-next]').onclick = () => (rec.lessonDone ? finishLesson(rec.lessonDone) : loadPuzzle());
      const rp = sh.querySelector('[data-replay]');
      if (rp) rp.onclick = () => session.puzzle.replaySolution();
      sh.querySelector('[data-next]').focus({ preventScroll: true });
    }, 350);
  }
  function finishLesson(L) {
    const run = Object.assign({ vol: session.vol }, L);
    endPlay(); session = null;
    screen = 'results'; screenArg = run; render(); window.scrollTo(0, 0);
    UI.sound.big(); UI.confetti(150);
  }

  /* ---------- lesson results ---------- */
  function resultsScreen(run) {
    if (!run) return homeScreen();
    const d = run.r1 - run.r0;
    const el = h(`<section class="page results">
      <h1 class="big"></h1>
      <div class="study">${UI.cat()}<div class="bubble"></div></div>
      <div class="stats">
        <div class="card stat"><b>⭐ ${run.pts}</b><span>${T.plural(run.pts, 'очко', 'очка', 'очков')}</span></div>
        <div class="card stat"><b>${run.n}</b><span>${T.plural(run.n, 'задача', 'задачи', 'задач')}</span></div>
        <div class="card stat"><b>${run.clean}</b><span>без ошибок</span></div>
      </div>
      <div class="card rating-line"><span>🏅 Рейтинг</span><b>${run.r0} → ${run.r1}</b><em class="${d > 0 ? 'up' : d < 0 ? 'down' : ''}">${T.signed(d)}</em></div>
      <div class="row2" style="margin-top:18px"><button class="btn ghost" data-home>На полку</button><button class="btn" data-next>Следующий урок</button></div>
    </section>`);
    el.querySelector('.big').textContent = `Урок ${run.num} пройден!`;
    el.querySelector('.bubble').textContent = run.clean === run.n
      ? 'Все задачи — без единой ошибки! Мур-р-р!'
      : d > 0 ? 'Рейтинг растёт! Решаем дальше?' : 'Хорошая работа! Ошибки — это тоже учёба. Решаем дальше!';
    el.querySelector('[data-home]').onclick = () => go('home');
    el.querySelector('[data-next]').onclick = () => startLesson(run.vol);
    return el;
  }

  /* ---------- players ---------- */
  function playersScreen() {
    const S = Progress.state;
    const el = h('<section class="page"><h1></h1><div class="pgrid"></div></section>');
    el.querySelector('h1').textContent = S.players.length ? 'Кто решает?' : 'Привет! Как тебя зовут?';
    const grid = el.querySelector('.pgrid');
    for (const p of S.players) {
      const card = h(`<div class="pcard-wrap"><button class="pcard ${p.id === S.currentId ? 'on' : ''}"><span class="av">${p.avatar}</span><b></b><small>🏅 ${p.rating}</small></button><button class="pedit" aria-label="Изменить">✏️</button></div>`);
      card.querySelector('b').textContent = p.name;
      card.querySelector('.pedit').setAttribute('aria-label', `Изменить: ${p.name}`);
      card.querySelector('.pcard').onclick = () => { Progress.setCurrent(p.id); go('home'); };
      card.querySelector('.pedit').onclick = () => playerModal(p);
      grid.append(card);
    }
    const add = h('<button class="pcard add"><span class="plus">+</span><b>Новый игрок</b></button>');
    add.onclick = () => playerModal(null); grid.append(add);
    if (!S.players.length) setTimeout(() => playerModal(null), 60);
    return el;
  }
  /** Create (p = null) or edit a player: name and avatar. */
  function playerModal(p) {
    let av = p ? Math.max(0, Progress.AVATARS.indexOf(p.avatar)) : 0;
    const el = h(`<form autocomplete="off"><h2>${p ? 'Изменить игрока' : 'Новый игрок'}</h2>
      <label class="field">Имя<input name="nm" maxlength="${Progress.NAME_MAX}" placeholder="Например, Маша" enterkeyhint="done"></label>
      <p class="field" style="margin:0">Кем ты будешь?</p>
      <div class="avs">${Progress.AVATARS.map((a, i) => `<button type="button" class="avb ${i === av ? 'on' : ''}" data-i="${i}" aria-label="${Progress.AVNAMES[i]}">${a}</button>`).join('')}</div>
      <button class="btn wide" type="submit">${p ? 'Сохранить' : 'Готово'}</button></form>`);
    if (p) el.nm.value = p.name;
    el.querySelectorAll('.avb').forEach(b => b.onclick = () => { av = +b.dataset.i; el.querySelectorAll('.avb').forEach(x => x.classList.toggle('on', x === b)); });
    const close = UI.modal(el);
    el.onsubmit = e => {
      e.preventDefault();
      if (p) { Progress.updatePlayer(p.id, { name: el.nm.value, avatarIdx: av }); close(); render(); }
      else { Progress.addPlayer(el.nm.value, av); close(); go('home'); }
    };
  }

  /* ---------- boot ---------- */
  function boot() {
    document.title = `${CONFIG.appName} — шахматные задачи`;
    UI.injectSprite();
    Progress.load();
    UI.sound.setMuted(Progress.state.muted);
    Progress.onChange(refresh);
    screen = Progress.current() ? 'home' : 'players';
    render();
    Progress.initCloud();
    let lastW = window.innerWidth;
    window.addEventListener('resize', () => { if (screen === 'home' && Math.abs(window.innerWidth - lastW) > 30) { lastW = window.innerWidth; render(); } });
  }

  return { boot, debug: () => ({ screen, session }) };
})();
