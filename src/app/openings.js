/* app/openings.js — the "Openings" mode: the list of openings to learn ('openings')
   and learning one of them ('opening'). The rules are in game/opening-controller.js;
   the studies are in data/openings.js. Points go to the lesson like puzzle points. */
(function () {
  const { h, esc, $ } = UI;
  const T = Texts;
  const P = CONFIG.openings;
  let games = null;            // parsed studies, by id
  let run = null;              // { id, board, ctrl } while an opening is being learned

  function gameOf(id) {
    if (!games) {
      games = {};
      for (const o of OPENINGS) {
        try { games[o.id] = Object.assign(Pgn.parseGame(o.pgn), { id: o.id, icon: o.icon }); }
        catch (e) { console.warn('Opening skipped (bad PGN):', o.id, e.message); }
      }
    }
    return games[id] || null;
  }
  const movesToLearn = g => Pgn.lines(g.root, g.player).reduce((a, l) => a + l.moves.length, 0);

  /* ---------- the list ---------- */
  function listScreen() {
    const pl = Progress.current();
    const el = h(`<section class="page openings"><h1></h1><p class="muted opsub"></p><div class="oplist"></div></section>`);
    el.querySelector('h1').textContent = T.t('openings');
    el.querySelector('.opsub').textContent = T.t('openingsSub');
    const list = el.querySelector('.oplist');
    for (const o of OPENINGS) {
      const g = gameOf(o.id); if (!g) continue;
      const st = (pl.openings || {})[o.id];
      const card = h(`<button class="card opcard">
        <span class="opicon" aria-hidden="true">${o.icon || '♞'}</span>
        <span class="optxt"><b></b><small class="opside"></small><small class="opmain"></small><small class="opbest"></small></span>
        <span class="opking ${g.player}" aria-hidden="true">${UI.piece(g.player === 'w' ? 'K' : 'k')}</span></button>`);
      card.querySelector('b').textContent = T.openingName(o.id);
      card.querySelector('.opside').textContent = `${T.t(g.player === 'w' ? 'forWhite' : 'forBlack')} · ${T.t('opMoves', movesToLearn(g))}`;
      const main = (T.t('openingMain') || {})[o.id], mEl = card.querySelector('.opmain');
      if (main) mEl.textContent = main; else mEl.remove();
      const w = Progress.openingWindow(pl, o.id), MAX = OpeningController.max(g);
      card.querySelector('.opbest').textContent = w && w.got ? T.t('opWindow', w.got, MAX, Math.max(1, Math.ceil((w.ends - Date.now()) / 3600e3)))
        : st && st.n ? T.t('opBest', st.best, MAX) : T.t('opNotYet');
      card.onclick = () => { UI.sound.unlock(); start(o.id); };
      list.append(card);
    }
    return el;
  }

  /* ---------- learning one opening ---------- */
  function start(id) {
    end();
    const g = gameOf(id); if (!g) return;
    run = { id, g, board: null, ctrl: null };
    Progress.markBusy(Progress.current().id, true);
    App.show('opening');
    begin();
  }
  function end() {
    if (!run) return;
    App.hidePause();
    if (run.ctrl) run.ctrl.dispose();
    if (run.board) run.board.destroy();
    run.ctrl = null; run.board = null;
    const pl = Progress.current(); if (pl) Progress.markBusy(pl.id, false);
  }

  function runScreen() {
    if (!run) { App.show('openings'); return null; }
    const el = h(`<section class="play opening">
      <header class="playbar">
        <button class="icon-btn" data-quit aria-label="${esc(T.t('quit'))}">✕</button>
        <span class="pav" aria-hidden="true">${Progress.current().avatar}</span>
        <div class="ptrack"><div class="ptxt"><b></b><span></span></div><div class="bar"><i></i></div></div>
        <div class="hearts lives5" aria-label="${esc(T.t('lives'))}"></div>
      </header>
      <div class="arena">
        <div id="board"></div>
        <div class="side">
          <div class="study">${UI.cat()}<div class="bubble" id="say" aria-live="polite"></div></div>
          <div class="sheet card" id="sheet" hidden></div>
        </div>
      </div>
    </section>`);
    el.querySelector('.ptxt b').textContent = `${run.g.icon || ''} ${T.openingName(run.id)}`;
    el.querySelector('[data-quit]').onclick = () => UI.confirm(T.t('quitConfirm'), T.t('quit'), () => App.go('openings'));
    run.board = new BoardController(el.querySelector('#board'));
    return el;
  }

  function say(text) { const b = $('#say'); if (!b) return; b.textContent = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  function hearts(lives, animate) {
    const el = $('.hearts'); if (!el) return;
    el.innerHTML = Array.from({ length: P.lives }, (_, i) => UI.heart(i < lives ? 'full' : 'lost')).join('');
    if (animate) { const s = el.querySelectorAll('svg')[lives]; if (s) s.classList.add('lose'); }
  }
  function progress() {
    const c = run && run.ctrl; if (!c) return;
    $('.ptxt span').textContent = T.t('opMoveOf', Math.min(c.done + 1, c.total), c.total);
    $('.ptrack .bar i').style.width = Math.round(c.done / c.total * 100) + '%';
  }
  /** A short green blink of the board: a good move, just not the one we learn. */
  function blink(ms) {
    const b = run && run.board && run.board.el; if (!b) return;
    b.classList.remove('good'); void b.offsetWidth; b.classList.add('good');
    setTimeout(() => b.classList.remove('good'), ms);
  }

  function begin() {
    const pl = Progress.current();
    $('#sheet').hidden = true;
    hearts(P.lives);
    const c = run.ctrl = new OpeningController(run.board, run.g, {
      lives: P.lives,
      pauseMs: App.pauseSecOf(pl) * 1000,
      onEvent: (type, d) => {
        if (type === 'line-start') { say(d.index ? T.t('opNextLine') : T.t('opStart', T.openingName(run.id), run.g.player)); progress(); }
        else if (type === 'your-turn') { if (!d.first) say(T.t('opYourTurn')); progress(); }
        else if (type === 'correct') { UI.sound.good(); say((d.node.nag && T.t('nag')[d.node.nag]) || T.t('opCorrect')); progress(); }
        else if (type === 'guided-move') { say(T.t('opGuided')); progress(); }
        else if (type === 'alt') { UI.sound.good(); blink(d.ms); say(T.t('opAlt')); }
        else if (type === 'wrong') { UI.sound.bad(); UI.vibrate(90); hearts(c.lives, d.lives > 0); say(d.arrow ? T.t('opWrongArrow') : T.t('opWrong', d.lives)); }
        else if (type === 'pause') App.showPause(run.board.el, d.ms);
        else if (type === 'resume') App.hidePause();
        else if (type === 'tour') { UI.sound.bad(); UI.vibrate(90); hearts(0, true); say(T.t('opTour')); }
        else if (type === 'guide-turn') progress();
        else if (type === 'guide-wrong') { UI.vibrate(40); say(T.cat.guideWrong()); }
        else if (type === 'line-done') { if (!d.last) { UI.sound.win(); UI.confetti(d.main ? 60 : 40); say(T.t(d.main ? 'opMainDone' : 'opLineDone', d.bonus)); } }
        else if (type === 'done') finish(d);
      },
    });
    progress();
    c.start();
  }

  function finish(d) {
    const pl = Progress.current();
    const rec = Progress.recordOpening(pl, run.id, d.total);
    UI.sound.big(); UI.confetti(rec.award ? 140 : 40); progress();
    say(T.t('opDone', rec.award));
    $('.ptrack .bar i').style.width = '100%';
    const sh = $('#sheet');
    sh.innerHTML = `<div class="opres">
        <div><span>${esc(T.t('opSheetMain'))}</span><b>+${d.main}</b></div>
        ${run.ctrl.lines.length > 1 ? `<div><span>${esc(T.t('opSheetLines'))}</span><b>+${d.lines}</b></div>` : ''}
        <div><span>${esc(d.tour ? T.t('opSheetTour') : T.t('opSheetLives', d.lives))}</span><b>+${d.end}</b></div>
        ${rec.before ? `<div class="sub"><span>${esc(T.t('opSheetRun'))}</span><b>${d.total}</b></div>
        <div class="sub"><span>${esc(T.t('opSheetBefore'))}</span><b>−${Math.min(rec.before, d.total)}</b></div>
        <div class="tot"><span>${esc(T.t('opSheetNew'))}</span><b>⭐ +${rec.award}</b></div>`
        : `<div class="tot"><span>${esc(T.t('opSheetTotal'))}</span><b>⭐ ${d.total}</b></div>`}
      </div>
      <div class="row2"><button class="btn ghost" data-again>${esc(T.t('again'))}</button><button class="btn" data-next>${esc(rec.lessonDone ? T.t('lessonSummary') : T.t('toOpenings'))}</button></div>`;
    sh.hidden = false;
    sh.querySelector('[data-again]').onclick = () => start(run.id);
    sh.querySelector('[data-next]').onclick = () => {
      if (rec.lessonDone) { end(); run = null; App.show('results', Object.assign({ vol: PuzzleSource.getMixed() }, rec.lessonDone)); UI.sound.big(); }
      else App.go('openings');
    };
    sh.querySelector('[data-next]').focus({ preventScroll: true });
  }

  App.screen('openings', listScreen);
  App.screen('opening', runScreen, () => { end(); run = null; });
  App.openings = { start, run: () => run };
})();
