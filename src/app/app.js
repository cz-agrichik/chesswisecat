/* app/app.js — the router and what the screens share. Each screen lives in its own
   file (home, volume, play, results, history, players) and registers itself with
   App.screen(name, render). Screens build DOM with UI.h and take all words from Texts.

   Flow: shelf (home) → volume page → lesson (play) → lesson results. A lesson is endless
   puzzles picked by PuzzleSource.pickNext until CONFIG.lessonGoal points are collected;
   the lesson's progress lives in the player record, so leaving and coming back
   continues it. */
const App = (function () {
  const { h, esc, $ } = UI;
  const T = Texts;
  const GOAL = CONFIG.lessonGoal;
  const screens = {};
  let screen = 'home', screenArg = null;

  /** A screen: render(arg) → element. onLeave() runs when another screen is opened. */
  function register(name, render, onLeave) { screens[name] = { render, onLeave }; }

  /** Open a screen (leaving the current one). */
  function go(name, arg) {
    if (screen !== name && screens[screen] && screens[screen].onLeave) screens[screen].onLeave();
    show(name, arg);
  }
  /** Switch screens without the leave hook (a screen handing over to the next one itself). */
  function show(name, arg) { screen = name; screenArg = arg; render(); window.scrollTo(0, 0); }

  /** Language and gender of the current player (or the last language used when nobody is chosen). */
  function applyLang() {
    const pl = Progress.current();
    T.setLang(pl ? pl.lang : Progress.state.lang);
    T.setGender(pl ? pl.gender : 'n');
    document.documentElement.lang = T.lang();
    document.title = T.t('docTitle', T.t('appName'));
  }
  function render() {
    applyLang();
    const app = $('#app'); app.innerHTML = '';
    if (!Progress.current() && screen !== 'players') screen = 'players';
    if (screen !== 'play') app.append(topbar());
    const s = screens[screen] || screens.home;
    const node = s.render(screenArg);   // null: the screen redirected elsewhere and rendered that
    if (node) app.append(node);
  }
  /** Data changed elsewhere (e.g. another device): redraw unless a puzzle or a dialog is open. */
  function refresh() { if (screen !== 'play' && !document.querySelector('.modal-bd')) render(); }

  /* ---------- top bar: player, history, home, sound ---------- */
  function topbar() {
    const pl = Progress.current();
    const bar = h('<header class="topbar"></header>');
    if (pl) {
      const chip = h(`<button class="chip" aria-label="${esc(T.t('players'))}"><span class="av">${pl.avatar}</span><span class="name"></span></button>`);
      chip.querySelector('.name').textContent = pl.name;
      chip.onclick = () => go('players');
      const hb = h(`<button class="icon-btn" aria-label="${esc(T.t('history'))}" title="${esc(T.t('history'))}">📈</button>`);
      if (screen === 'history') hb.classList.add('on');
      hb.onclick = () => go('history');
      bar.append(chip, hb);
    }
    bar.append(h('<span class="spacer"></span>'));
    if (screen !== 'home' && pl) { const b = h(`<button class="icon-btn" aria-label="${esc(T.t('home'))}">🏠</button>`); b.onclick = () => go('home'); bar.append(b); }
    const snd = h(`<button class="icon-btn" aria-label="${esc(T.t('sound'))}">${Progress.state.muted ? '🔇' : '🔊'}</button>`);
    snd.onclick = () => { Progress.setMuted(!Progress.state.muted); UI.sound.setMuted(Progress.state.muted); snd.textContent = Progress.state.muted ? '🔇' : '🔊'; };
    bar.append(snd);
    return bar;
  }

  /* ---------- shared helpers ---------- */
  const BOOK_COLORS = ['#FF8A7A', '#6CCB8C', '#72C8F2', '#B7A6F2', '#FFC83D', '#FF7396', '#4FC2B4', '#F59E5B'];
  const bookColor = vol => vol.color || BOOK_COLORS[Math.max(0, vol.index) % BOOK_COLORS.length];
  /** Spine text colour: white or dark ink, whichever reads better on the book colour (WCAG contrast). */
  function spineInk(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex || ''); if (!m) return '#23264A';
    const lum = [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16) / 255)
      .map(c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    const L = 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    return 1.05 / (L + 0.05) >= (L + 0.05) / 0.0687 ? '#fff' : '#23264A';   // 0.0687 = luminance of #23264A + 0.05
  }
  const lessonView = pl => pl.lesson || { num: pl.lessonsDone + 1, pts: 0, n: 0, clean: 0 };
  const allBooks = () => (PuzzleSource.getVolumes().length ? PuzzleSource.getMixed() : null);
  const pauseSecOf = p => (p && Number.isFinite(p.pauseSec) ? p.pauseSec : CONFIG.mistakePauseSec);
  /** Result of a puzzle by points: [css class, mark, text key]. */
  function resultMark(pts) {
    const P = CONFIG.points;
    return pts >= P.clean ? ['c2', '★★', 'resClean'] : pts >= P.withMistakes ? ['c1', '★', 'resMistakes'] : ['c0', '🌱', 'resGuided'];
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

  return {
    screen: register, go, show, render, refresh, applyLang, boot,
    current: () => screen,
    GOAL, bookColor, spineInk, lessonView, allBooks, pauseSecOf, resultMark,
    debug: () => ({ screen, session: App.play && App.play.session() }),
  };
})();
