/* app/play.js — solving: the board, the cat's lines, hearts, hints, the think-pause
   after a mistake and the result sheet after each puzzle. Glues BoardController and
   PuzzleController to Progress; owns no chess logic itself. */
(function () {
  const { h, esc, $ } = UI;
  const T = Texts;
  let session = null;     // { vol, board, puzzle, z } while a lesson is open

  function start(vol) {
    const pl = Progress.current();
    end();
    session = { vol, board: null, puzzle: null, z: null };
    Progress.markBusy(pl.id, true);
    App.show('play');
    loadPuzzle();
  }
  function end() {
    if (!session) return;
    hidePause();
    if (session.puzzle) session.puzzle.dispose();
    if (session.board) session.board.destroy();
    session.puzzle = null; session.board = null;
    const pl = Progress.current(); if (pl) Progress.markBusy(pl.id, false);
  }

  function playScreen() {
    const el = h(`<section class="play">
      <header class="playbar">
        <button class="icon-btn" data-quit aria-label="${esc(T.t('quit'))}">✕</button>
        <span class="pav" aria-hidden="true">${Progress.current().avatar}</span>
        <div class="ptrack"><div class="ptxt"><b></b><span></span></div><div class="bar"><i></i></div></div>
        <div class="hearts" aria-label="${esc(T.t('tries'))}"></div>
      </header>
      <div class="arena">
        <div id="board"></div>
        <div class="side">
          <div class="study">${UI.cat()}<div class="bubble" id="say" aria-live="polite"></div></div>
          <div class="tools" id="tools"><button class="btn ghost" id="hintBtn">💡 ${esc(T.t('hint'))} <small>−1 ❤</small></button><div class="score" aria-label="${esc(T.t('ratingCap'))}">🏅 <b id="rating"></b></div></div>
          <div class="sheet card" id="sheet" hidden></div>
        </div>
      </div>
    </section>`);
    el.querySelector('[data-quit]').onclick = () => UI.confirm(T.t('quitConfirm'), T.t('quit'), () => App.go('home'));
    el.querySelector('#hintBtn').onclick = onHint;
    session.board = new BoardController(el.querySelector('#board'));
    return el;
  }

  function say(text) { const b = $('#say'); if (!b) return; b.textContent = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  function updateHeader(L) {
    const pl = Progress.current(), GOAL = App.GOAL;
    L = L || App.lessonView(pl);
    $('.ptxt b').textContent = T.t('lessonN', L.num);
    $('.ptxt span').textContent = T.t('ofGoal', Math.min(L.pts, GOAL), GOAL);
    $('.ptrack .bar i').style.width = Math.min(100, Math.round(L.pts / GOAL * 100)) + '%';
    $('#rating').textContent = pl.rating;
  }
  function updateHearts(left, animate) {
    const el = $('.hearts'), tries = CONFIG.triesBeforeAnswer;
    el.innerHTML = Array.from({ length: tries }, (_, i) => UI.heart(i < left ? 'full' : 'lost')).join('');
    if (animate) { const s = el.querySelectorAll('svg')[left]; if (s) s.classList.add('lose'); }
  }

  function loadPuzzle() {
    hidePause();
    const pl = Progress.current();
    const z = session.z = PuzzleSource.pickNext(session.vol, pl);
    if (session.puzzle) session.puzzle.dispose();
    $('#sheet').hidden = true; $('#tools').hidden = false; $('#hintBtn').disabled = true;
    updateHeader(); updateHearts(CONFIG.triesBeforeAnswer);
    if (!z) { say(T.t('soonPuzzles')); return; }
    const pc = session.puzzle = new PuzzleController(session.board, z, {
      tries: CONFIG.triesBeforeAnswer,
      pauseMs: k => k * App.pauseSecOf(pl) * 1000,
      onEvent: (type, data) => {
        if (type === 'intro') say(T.cat.opponent());
        else if (type === 'your-turn') { $('#hintBtn').disabled = !pc.canHint(); say(data.first ? T.goal(z, pc.player) : T.cat.continueTurn()); }
        else if (type === 'correct') { $('#hintBtn').disabled = true; UI.sound.good(); say(T.cat.correct()); }
        else if (type === 'wrong') { UI.sound.bad(); UI.vibrate(90); updateHearts(pc.left, true); say(T.cat.wrong(data.left)); }
        else if (type === 'hint') { updateHearts(pc.left, true); say(data.level === 1 ? T.cat.hint1(data.piece, data.left) : T.cat.hint2()); $('#hintBtn').disabled = !pc.canHint(); }
        else if (type === 'pause') { $('#hintBtn').disabled = true; showPause(data.ms); }
        else if (type === 'resume') { hidePause(); $('#hintBtn').disabled = !pc.canHint(); }
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

  /** After a puzzle: stars (or a sprout), rating change, next / again. */
  function onDone(z, result) {
    const pl = Progress.current();
    const rec = Progress.record(pl, z, result);
    const kind = result.guided ? 'shown' : result.mistakes || result.hints ? 'mistakes' : 'clean';
    $('#hintBtn').disabled = true;
    updateHeader(rec.lesson);
    setTimeout(() => {
      if (App.current() !== 'play' || !session || session.z !== z) return;
      if (kind !== 'shown') { UI.sound.win(); UI.confetti(kind === 'clean' ? 110 : 50); UI.vibrate(40); }
      say(rec.lessonDone ? T.cat.lessonDone() : T.cat.done(kind));
      const dCls = rec.delta > 0 ? 'up' : rec.delta < 0 ? 'down' : '';
      const badge = kind === 'shown'
        ? '<span class="sprout" aria-hidden="true">🌱</span>'
        : Array.from({ length: rec.points }, () => UI.star('on')).join('');
      const sh = $('#sheet');
      sh.innerHTML = `<div class="res-row">
          <div class="starrow ${kind}" role="img" aria-label="${esc(kind === 'shown' ? T.t('solutionShown') : '+' + T.points(rec.points))}">${badge}</div>
          <div class="res-rating"><small>${esc(T.t('rating'))}</small><b>${rec.rating}</b><em class="${dCls}">${T.signed(rec.delta)}</em></div>
        </div>
        <div class="row2">${kind === 'shown' ? `<button class="btn ghost" data-replay>${esc(T.t('again'))}</button>` : ''}<button class="btn" data-next>${esc(rec.lessonDone ? T.t('lessonSummary') : kind === 'shown' ? T.t('next') : T.t('nextPuzzle'))}</button></div>`;
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
    end(); session = null;
    App.show('results', run);
    UI.sound.big(); UI.confetti(150);
  }

  /* ---------- think-pause after a mistake ---------- */
  let pauseTimer = 0;
  /** Grey the board and show a small hourglass with a countdown above its top edge. */
  function showPause(ms) {
    hidePause();
    const board = session && session.board && session.board.el; if (!board) return;
    board.classList.add('paused');
    const endAt = Date.now() + ms;
    const badge = h(`<div class="pause-badge" role="timer" aria-label="${esc(T.t('think'))}"><span class="hg" aria-hidden="true">⏳</span><b></b><i style="animation-duration:${ms}ms"></i></div>`);
    const tick = () => { const s = Math.max(0, Math.ceil((endAt - Date.now()) / 1000)); badge.querySelector('b').textContent = s; };
    tick(); pauseTimer = setInterval(tick, 200);
    board.append(badge);
  }
  function hidePause() {
    clearInterval(pauseTimer); pauseTimer = 0;
    document.querySelectorAll('.pause-badge').forEach(x => x.remove());
    document.querySelectorAll('.board.paused').forEach(x => x.classList.remove('paused'));
  }

  App.screen('play', playScreen, end);
  App.play = { start, end, session: () => session };
})();
