/* app/screens.js — the screens and the router. Glues PuzzleSource, Progress,
   BoardController and PuzzleController together; owns no chess logic itself. */
const App = (function () {
  const { h, esc, $ } = UI;
  const T = Texts;
  const BOOK_COLORS = ['#FF8A7A', '#6CCB8C', '#72C8F2', '#B7A6F2', '#FFC83D', '#FF7396', '#4FC2B4', '#F59E5B'];
  const bookColor = i => BOOK_COLORS[i % BOOK_COLORS.length];

  let screen = 'home';
  let session = null;     // active pack run
  let screenArg = null;

  function go(name, arg) {
    if (screen === 'play' && name !== 'play') endPlay();
    screen = name; screenArg = arg; render(); window.scrollTo(0, 0);
  }
  function render() {
    const app = $('#app'); app.innerHTML = '';
    if (!Progress.current() && screen !== 'players') screen = 'players';
    if (screen !== 'play') app.append(topbar());
    const fn = { home: homeScreen, players: playersScreen, pack: packScreen, play: playScreen, results: resultsScreen, leaders: leadersScreen }[screen] || homeScreen;
    app.append(fn(screenArg));
  }
  function refresh() { if (screen !== 'play' && !document.querySelector('.modal-bd')) render(); }

  /* ---------- top bar ---------- */
  function topbar() {
    const pl = Progress.current();
    const bar = h('<header class="topbar"></header>');
    if (pl) {
      const chip = h(`<button class="chip" aria-label="Сменить игрока"><span class="av">${pl.avatar}</span><span class="name"></span></button>`);
      chip.querySelector('.name').textContent = pl.name;
      chip.onclick = () => go('players');
      bar.append(chip);
    }
    bar.append(h('<span class="spacer"></span>'));
    if (screen !== 'home' && pl) { const b = h('<button class="icon-btn" aria-label="На главную">🏠</button>'); b.onclick = () => go('home'); bar.append(b); }
    if (screen !== 'leaders' && Progress.state.players.length) { const b = h('<button class="icon-btn" aria-label="Таблица лидеров">🏆</button>'); b.onclick = () => go('leaders'); bar.append(b); }
    const snd = h(`<button class="icon-btn" aria-label="Звук">${Progress.state.muted ? '🔇' : '🔊'}</button>`);
    snd.onclick = () => { Progress.setMuted(!Progress.state.muted); UI.sound.setMuted(Progress.state.muted); snd.textContent = Progress.state.muted ? '🔇' : '🔊'; };
    bar.append(snd);
    return bar;
  }

  /* ---------- home: the cat's bookcase ---------- */
  function homeScreen() {
    const pl = Progress.current(), packs = PuzzleSource.getPacks();
    const target = Progress.nextTarget(pl, packs), lv = Progress.levelOf(pl.points);
    const el = h(`<section class="home">
      <h1 class="title">Шахматята</h1>
      <div class="study">${UI.cat('big')}<div class="bubble" id="catSay"></div></div>
      <button class="cta" data-go><span class="cta-play" aria-hidden="true"></span><span class="cta-txt"><b>Решать</b><small></small></span></button>
      <div class="lvl card">
        <div class="ring" style="--p:${lv.pct}"><span>${lv.level}</span></div>
        <div class="lvl-txt"><b></b><small></small></div>
        <div class="lvl-num"><b>${pl.solved}</b><small>${T.plural(pl.solved, 'решена', 'решены', 'решено')}</small></div>
      </div>
      <div class="bookcase"><div class="bc-top">Полка задач</div><div class="bc-body"></div></div>
    </section>`);
    el.querySelector('.lvl-txt b').textContent = `Уровень ${lv.level}: ${lv.title}`;
    el.querySelector('.lvl-txt small').textContent = `Ещё ${T.points(lv.left)} до следующего уровня`;
    const anySeen = Object.keys(pl.seen).length > 0;
    el.querySelector('#catSay').textContent = !target ? 'Задачи скоро появятся!' : target.mode === 'continue' ? (anySeen ? T.cat.welcomeBack(pl.name) : T.cat.hello(pl.name)) : T.cat.allDone(pl.name);
    const cta = el.querySelector('[data-go]');
    if (target) {
      const n = target.pack.puzzles.length;
      cta.querySelector('small').textContent = target.mode === 'continue'
        ? `${target.pack.title}, задача ${target.index + 1} из ${n}`
        : `Повторяем: ${target.pack.title}`;
      cta.onclick = () => { UI.sound.unlock(); startPack(target.pack, target.index); };
    } else { cta.disabled = true; cta.querySelector('small').textContent = 'Задач пока нет'; }

    // bookcase — grows with the number of packs; the last slot always hints at more to come
    const body = el.querySelector('.bc-body');
    const width = Math.min(560, document.documentElement.clientWidth - 32) - 36;
    const perShelf = Math.max(3, Math.min(7, Math.floor((width + 10) / 74)));
    const items = packs.map((pk, i) => bookEl(pk, i, pl, target)).concat([h(`<div class="book soon" aria-label="Скоро новый пакет"><span class="book-num">…</span><span class="book-cap">скоро</span></div>`)]);
    for (let i = 0; i < items.length; i += perShelf) {
      const shelf = h('<div class="shelf"></div>');
      items.slice(i, i + perShelf).forEach(b => shelf.append(b));
      body.append(shelf);
    }
    const firstShelf = body.querySelector('.shelf');
    if (firstShelf) firstShelf.append(h('<span class="deco" aria-hidden="true">🪴</span>'));
    return el;
  }
  function bookEl(pack, i, pl, target) {
    const st = Progress.packStats(pl, pack);
    const isCur = target && target.pack === pack && target.mode === 'continue';
    const heights = [128, 138, 120, 134, 124, 136, 122];
    const b = h(`<button class="book ${st.complete ? 'done' : ''} ${st.perfect ? 'perfect' : ''} ${isCur ? 'current' : ''}" style="--c:${bookColor(i)};--hh:${heights[i % heights.length]}px">
      <span class="book-band"></span><span class="book-num">${i + 1}</span><span class="book-cap">${st.stars}/${st.max}★</span><span class="book-band low"></span>
      ${st.complete ? '<svg class="ribbon" viewBox="0 0 12 30" aria-hidden="true"><path d="M1 1 H11 V28 L6 23 L1 28 Z"/></svg>' : ''}${st.perfect ? '<span class="crown" aria-hidden="true">👑</span>' : ''}${isCur ? '<span class="paw" aria-hidden="true">🐾</span>' : ''}
    </button>`);
    b.setAttribute('aria-label', `${pack.title}: звёзд ${st.stars} из ${st.max}`);
    b.onclick = () => go('pack', pack.id);
    return b;
  }

  /* ---------- pack page ---------- */
  function tilesEl(pack, pl, { current = -1, onPick } = {}) {
    const cols = Math.min(5, pack.puzzles.length);
    const grid = h(`<div class="tiles" style="grid-template-columns:repeat(${cols},1fr);max-width:${cols * 92}px"></div>`);
    pack.puzzles.forEach((z, i) => {
      const s = pl.stars[z.id] || 0, seen = !!pl.seen[z.id];
      const r = Math.floor(i / cols), c = i % cols;
      const t = h(`<button class="tile ${(r + c) % 2 ? 'd' : 'l'} ${i === current ? 'cur' : ''}"><span class="tn">${i + 1}</span><span class="ts">${s ? UI.miniStars(s) : seen ? '👀' : ''}</span></button>`);
      t.setAttribute('aria-label', `Задача ${i + 1}` + (s ? `, звёзд: ${s}` : seen ? ', ответ посмотрели' : ''));
      if (onPick) t.onclick = () => onPick(i); else t.disabled = true;
      grid.append(t);
    });
    return grid;
  }
  function packScreen(packId) {
    const pl = Progress.current(), pack = PuzzleSource.getPack(packId);
    if (!pack) return homeScreen();
    const i = pack.index, st = Progress.packStats(pl, pack);
    const first = pack.puzzles.findIndex(z => !pl.seen[z.id]);
    const startAt = first >= 0 ? first : Math.max(0, pack.puzzles.findIndex(z => (pl.stars[z.id] || 0) < 3));
    const el = h(`<section class="page">
      <div class="packhead"><div class="cover" style="--c:${bookColor(i)}"><span>${i + 1}</span></div>
        <div><h1></h1><p class="muted"></p></div></div>
      <div class="card tilecard"><p class="tiles-hint">Нажми на клетку, чтобы начать с этой задачи</p></div>
      <button class="btn wide" data-start style="margin-top:16px"></button>
    </section>`);
    el.querySelector('h1').textContent = pack.title;
    el.querySelector('.packhead .muted').textContent = `⭐ ${st.stars} из ${st.max}   ✅ решено ${st.solved} из ${st.n}`;
    el.querySelector('.tilecard').prepend(tilesEl(pack, pl, { current: startAt, onPick: k => startPack(pack, k) }));
    el.querySelector('[data-start]').textContent = first >= 0 ? (first ? `Продолжить с задачи ${first + 1}` : 'Решать') : st.perfect ? 'Решить ещё раз' : `Добыть звёзды — с задачи ${startAt + 1}`;
    el.querySelector('[data-start]').onclick = () => startPack(pack, first >= 0 ? first : startAt);
    return el;
  }

  /* ---------- play ---------- */
  function startPack(pack, index) {
    const pl = Progress.current();
    endPlay();
    session = { pack, index, startIndex: index, results: [], streak: 0, points: 0, levelUp: null, board: null, puzzle: null };
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
          <div class="tools" id="tools"><button class="btn ghost" id="hintBtn">💡 Подсказка</button><div class="score">🏆 <b id="runPts">0</b></div></div>
          <div class="sheet card" id="sheet" hidden></div>
        </div>
      </div>
    </section>`);
    el.querySelector('[data-quit]').onclick = () => UI.confirm('Выйти? Решённые задачи сохранятся.', 'Выйти', () => go('home'));
    el.querySelector('#hintBtn').onclick = onHint;
    session.board = new BoardController(el.querySelector('#board'));
    return el;
  }

  function say(text) { const b = $('#say'); if (!b) return; b.textContent = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  function updateHeader() {
    const n = session.pack.puzzles.length;
    $('.ptxt b').textContent = session.pack.title;
    $('.ptxt span').textContent = `Задача ${session.index + 1} из ${n}`;
    $('.ptrack .bar i').style.width = Math.round(session.index / n * 100) + '%';
    $('#runPts').textContent = session.points;
  }
  function updateHearts(mistakes, animate) {
    const el = $('.hearts'), tries = CONFIG.triesBeforeAnswer, left = Math.max(0, tries - mistakes);
    el.innerHTML = Array.from({ length: tries }, (_, i) => UI.heart(i < left ? 'full' : 'lost')).join('');
    if (animate) { const s = el.querySelectorAll('svg')[left]; if (s) s.classList.add('lose'); }
  }

  function loadPuzzle() {
    const z = session.pack.puzzles[session.index];
    if (session.puzzle) session.puzzle.dispose();
    $('#sheet').hidden = true; $('#tools').hidden = false; $('#hintBtn').disabled = true;
    updateHeader(); updateHearts(0);
    const n = session.pack.puzzles.length;
    const pc = session.puzzle = new PuzzleController(session.board, z, {
      tries: CONFIG.triesBeforeAnswer,
      onEvent: (type, data) => {
        if (type === 'intro') say(T.cat.opponent(session.index + 1, n));
        else if (type === 'your-turn') { $('#hintBtn').disabled = !pc.canHint(); say(data.first ? T.goal(z, pc.player) : T.cat.continueTurn()); }
        else if (type === 'correct') { $('#hintBtn').disabled = true; UI.sound.good(); say(T.cat.correct()); }
        else if (type === 'wrong') { UI.sound.bad(); UI.vibrate(90); updateHearts(pc.mistakes, true); say(T.cat.wrong(data.left)); }
        else if (type === 'out-of-tries') { UI.sound.bad(); UI.vibrate(90); updateHearts(pc.mistakes, true); $('#hintBtn').disabled = true; say(T.cat.outOfTries()); finishPuzzle(z, pc.result); }
        else if (type === 'solved') onSolved(z, data);
        else if (type === 'solution-start') { $('#sheet').hidden = true; $('#tools').hidden = false; $('#hintBtn').disabled = true; say(T.cat.solution()); }
        else if (type === 'solution-done') onSolutionDone(z, data.line);
        else if (type === 'broken') { console.warn('Puzzle could not be played:', z.id); nextPuzzle(); }
      },
    });
    pc.start();
  }
  function onHint() {
    const pc = session && session.puzzle; if (!pc) return;
    UI.sound.unlock();
    const r = pc.hint(); if (!r) return;
    say(r.level === 1 ? T.cat.hint1(r.piece) : T.cat.hint2());
    $('#hintBtn').disabled = !pc.canHint();
  }

  function finishPuzzle(z, result) {
    const pl = Progress.current();
    session.streak = result.solved ? session.streak + 1 : 0;
    const rec = Progress.record(pl, z, result, session.streak);
    session.points += rec.points;
    if (rec.levelUp) session.levelUp = rec.levelUp;
    session.results.push({ id: z.id, ...result, points: rec.points });
    $('#runPts').textContent = session.points;
    $('.ptrack .bar i').style.width = Math.round((session.index + 1) / session.pack.puzzles.length * 100) + '%';
    return rec;
  }
  function onSolved(z, result) {
    const rec = finishPuzzle(z, result);
    $('#hintBtn').disabled = true;
    setTimeout(() => {
      if (screen !== 'play' || !session || session.puzzle === null) return;
      UI.sound.win(); UI.confetti(result.stars === 3 ? 110 : 60); UI.vibrate(40);
      say(T.cat.solved(result.stars));
      const last = session.index >= session.pack.puzzles.length - 1;
      const tag = T.themeTag(z);
      const sh = $('#sheet');
      sh.innerHTML = `<h2>${result.stars === 3 ? 'Ура!' : result.stars === 2 ? 'Отлично!' : 'Есть!'}</h2>
        <div class="starrow">${[0, 1, 2].map(i => UI.star(i < result.stars ? 'on' : 'off')).join('')}</div>
        <p class="gain">+${T.points(rec.points)}</p>
        ${rec.bonus ? `<p class="muted" style="margin:0">Серия ${session.streak} 🔥 бонус +${rec.bonus}</p>` : ''}
        ${rec.levelUp ? `<p class="lvlup">🎓 Новый уровень ${rec.levelUp.level}: ${esc(rec.levelUp.title)}!</p>` : ''}
        ${tag ? `<span class="tag">Приём: ${esc(tag)}</span>` : ''}
        <button class="btn wide" style="margin-top:14px" data-next>${last ? 'Итоги пакета' : 'Следующая задача'}</button>`;
      sh.querySelectorAll('.starrow .on').forEach((s, i) => { s.style.animationDelay = (i * 0.18) + 's'; });
      sh.hidden = false; $('#tools').hidden = true;
      sh.querySelector('[data-next]').onclick = nextPuzzle;
      sh.querySelector('[data-next]').focus({ preventScroll: true });
    }, 350);
  }
  function onSolutionDone(z, line) {
    const last = session.index >= session.pack.puzzles.length - 1;
    const sh = $('#sheet');
    sh.innerHTML = `<h2 class="calm">Вот как надо было</h2><ol class="sol"></ol>
      <div class="row2"><button class="btn ghost" data-replay>Ещё раз</button><button class="btn" data-next>${last ? 'Итоги' : 'Дальше'}</button></div>`;
    const ol = sh.querySelector('.sol');
    for (const st of line) {
      const li = document.createElement('li'); li.className = st.mine ? 'me' : '';
      li.innerHTML = `<small>${st.mine ? 'Твой ход' : 'Соперник'}</small>`;
      li.append(document.createTextNode(T.describeMove(st.state, st.move)));
      ol.append(li);
    }
    const tag = T.themeTag(z);
    if (tag) { const t = h('<span class="tag" style="margin:0 0 6px"></span>'); t.textContent = 'Приём: ' + tag; sh.insertBefore(t, ol); }
    sh.hidden = false; $('#tools').hidden = true;
    say(T.cat.solutionDone());
    sh.querySelector('[data-next]').onclick = nextPuzzle;
    sh.querySelector('[data-replay]').onclick = () => { sh.hidden = true; say(T.cat.replay()); session.puzzle.replaySolution(); };
  }
  function nextPuzzle() {
    session.index++;
    if (session.index >= session.pack.puzzles.length) return finishPack();
    loadPuzzle();
  }
  function finishPack() {
    const run = { pack: session.pack, results: session.results.slice(), points: session.points, levelUp: session.levelUp, startIndex: session.startIndex };
    endPlay(); session = null;
    screen = 'results'; screenArg = run; render(); window.scrollTo(0, 0);
    if (run.results.some(r => r.solved)) { UI.sound.big(); UI.confetti(150); }
  }

  /* ---------- pack results ---------- */
  function resultsScreen(run) {
    if (!run) return homeScreen();
    const pl = Progress.current(), packs = PuzzleSource.getPacks();
    const st = Progress.packStats(pl, run.pack);
    const solvedRun = run.results.filter(r => r.solved).length, nRun = run.results.length;
    const nextPack = packs[run.pack.index + 1] || null;
    const el = h(`<section class="page results">
      <h1 class="big"></h1>
      <div class="study">${UI.cat()}<div class="bubble"></div></div>
      <div class="stats">
        <div class="card stat"><b>⭐ ${st.stars}</b><span>из ${st.max}</span></div>
        <div class="card stat"><b>+${run.points}</b><span>${T.plural(run.points, 'очко', 'очка', 'очков')}</span></div>
        <div class="card stat"><b>${solvedRun}/${nRun}</b><span>решено</span></div>
      </div>
      <div data-rib></div>
      <div class="card tilecard"></div>
      <div class="row2" style="margin-top:18px"><button class="btn ghost" data-home>На полку</button><button class="btn" data-next></button></div>
    </section>`);
    el.querySelector('.big').textContent = `${run.pack.title} пройден!`;
    el.querySelector('.bubble').textContent = solvedRun === nRun
      ? (nextPack ? 'Все задачи решены! Следующий пакет уже ждёт.' : 'Все задачи решены! Новые пакеты скоро появятся — а пока соберём все звёзды.')
      : 'Хорошая работа! Ошибки — это тоже учёба. Решаем дальше!';
    if (run.levelUp) { const r = h('<span class="ribbon-tag"></span>'); r.textContent = `🎓 Новый уровень ${run.levelUp.level}: ${run.levelUp.title}`; el.querySelector('[data-rib]').append(r); }
    el.querySelector('.tilecard').append(tilesEl(run.pack, pl));
    const nb = el.querySelector('[data-next]');
    if (nextPack) { nb.textContent = 'Следующий пакет'; nb.onclick = () => startPack(nextPack, Math.max(0, nextPack.puzzles.findIndex(z => !pl.seen[z.id]))); }
    else { nb.textContent = 'Решать дальше'; nb.onclick = () => { const t = Progress.nextTarget(pl, packs); if (t) startPack(t.pack, t.index); }; }
    el.querySelector('[data-home]').onclick = () => go('home');
    return el;
  }

  /* ---------- players ---------- */
  function playersScreen() {
    const S = Progress.state;
    const el = h('<section class="page"><h1></h1><div class="pgrid"></div></section>');
    el.querySelector('h1').textContent = S.players.length ? 'Кто решает?' : 'Привет! Как тебя зовут?';
    const grid = el.querySelector('.pgrid');
    for (const p of S.players) {
      const b = h(`<button class="pcard ${p.id === S.currentId ? 'on' : ''}"><span class="av">${p.avatar}</span><b></b><small>⭐ ${Progress.totalStars(p)}</small></button>`);
      b.querySelector('b').textContent = p.name;
      b.onclick = () => { Progress.setCurrent(p.id); go('home'); };
      grid.append(b);
    }
    const add = h('<button class="pcard add"><span class="plus">+</span><b>Новый игрок</b></button>');
    add.onclick = addPlayerModal; grid.append(add);
    if (!S.players.length) setTimeout(addPlayerModal, 60);
    return el;
  }
  function addPlayerModal() {
    const el = h(`<form autocomplete="off"><h2>Новый игрок</h2>
      <label class="field">Имя<input name="nm" maxlength="14" placeholder="Например, Маша" enterkeyhint="done"></label>
      <p class="field" style="margin:0">Выбери зверька</p>
      <div class="avs">${Progress.AVATARS.map((a, i) => `<button type="button" class="avb ${i ? '' : 'on'}" data-i="${i}" aria-label="${Progress.AVNAMES[i]}">${a}</button>`).join('')}</div>
      <button class="btn wide" type="submit">Готово</button></form>`);
    let av = 0;
    el.querySelectorAll('.avb').forEach(b => b.onclick = () => { av = +b.dataset.i; el.querySelectorAll('.avb').forEach(x => x.classList.toggle('on', x === b)); });
    const close = UI.modal(el);
    el.onsubmit = e => { e.preventDefault(); Progress.addPlayer(el.nm.value, av); close(); go('home'); };
  }

  /* ---------- leaderboard ---------- */
  function leadersScreen() {
    const S = Progress.state;
    const list = S.players.slice().sort((a, b) => b.points - a.points || Progress.totalStars(b) - Progress.totalStars(a));
    const el = h('<section class="page"><h1>Таблица лидеров</h1><div class="podium"></div><ol class="lb"></ol></section>');
    const pod = el.querySelector('.podium');
    if (list.length >= 2) {
      for (const k of [1, 0, 2]) {
        const p = list[k]; if (!p) continue;
        const d = h(`<div class="pod p${k + 1}"><span class="av">${p.avatar}</span><div class="nm"></div><div class="pts">${T.points(p.points)}</div><div class="blk">${['🥇', '🥈', '🥉'][k]}</div></div>`);
        d.querySelector('.nm').textContent = p.name; pod.append(d);
      }
    } else pod.remove();
    const ol = el.querySelector('.lb');
    list.forEach((p, i) => {
      const lv = Progress.levelOf(p.points);
      const li = h(`<li class="card ${p.id === S.currentId ? 'me' : ''}"><span class="rk">${i + 1}</span><span class="av">${p.avatar}</span><span class="nm"><span></span><small>Уровень ${lv.level}   ⭐ ${Progress.totalStars(p)}   ✅ ${p.solved}</small></span><span class="pts">${p.points}</span></li>`);
      li.querySelector('.nm span').textContent = p.name; ol.append(li);
    });
    if (list.length < 2) el.append(h('<p class="muted" style="margin-top:16px">Добавь ещё игроков — брата, сестру или друга, — чтобы соревноваться.</p>'));
    return el;
  }

  /* ---------- boot ---------- */
  function boot() {
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
