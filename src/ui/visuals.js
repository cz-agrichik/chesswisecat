/* ui/visuals.js — visual building blocks only: SVG sprite (pieces, cat), icons,
   DOM helpers, sounds, confetti, toast and modal. No game rules here. */
const UI = (function () {
  const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="pc-p" viewBox="0 0 100 100">
  <path d="M27 84 Q28 64 41 55 L59 55 Q72 64 73 84 Z"/><rect x="36" y="49" width="28" height="9" rx="4.5"/>
  <circle cx="50" cy="34" r="14"/><rect x="22" y="78" width="56" height="12" rx="6"/>
</symbol>
<symbol id="pc-r" viewBox="0 0 100 100">
  <path d="M33 80 L36 47 L64 47 L67 80 Z"/>
  <path d="M27 20 L38 20 L38 28 L45 28 L45 20 L55 20 L55 28 L62 28 L62 20 L73 20 L73 41 Q73 47 67 47 L33 47 Q27 47 27 41 Z"/>
  <path d="M38 60 L62 60" style="fill:none;stroke:var(--detail);stroke-width:4"/><rect x="22" y="78" width="56" height="12" rx="6"/>
</symbol>
<symbol id="pc-b" viewBox="0 0 100 100">
  <path d="M38 80 Q38 68 44 62 Q31 54 33 40 Q36 25 50 17 Q64 25 67 40 Q69 54 56 62 Q62 68 62 80 Z"/><circle cx="50" cy="12" r="6"/>
  <path d="M56 31 L46 45" style="fill:none;stroke:var(--detail);stroke-width:4"/>
  <rect x="34" y="60" width="32" height="8" rx="4"/><rect x="22" y="78" width="56" height="12" rx="6"/>
</symbol>
<symbol id="pc-q" viewBox="0 0 100 100">
  <path d="M28 74 L18 34 L35 52 L36 28 L46 50 L50 22 L54 50 L64 28 L65 52 L82 34 L72 74 Z"/>
  <circle cx="18" cy="31" r="5.5"/><circle cx="36" cy="25" r="5.5"/><circle cx="50" cy="18" r="5.5"/><circle cx="64" cy="25" r="5.5"/><circle cx="82" cy="31" r="5.5"/>
  <rect x="27" y="68" width="46" height="12" rx="6"/><rect x="22" y="78" width="56" height="12" rx="6"/>
</symbol>
<symbol id="pc-k" viewBox="0 0 100 100">
  <path d="M27 74 Q17 49 30 41 Q43 34 50 49 Q57 34 70 41 Q83 49 73 74 Z"/>
  <path d="M46 8 L54 8 L54 16 L62 16 L62 24 L54 24 L54 40 L46 40 L46 24 L38 24 L38 16 L46 16 Z"/>
  <rect x="27" y="68" width="46" height="12" rx="6"/><rect x="22" y="78" width="56" height="12" rx="6"/>
</symbol>
<symbol id="pc-n" viewBox="0 0 100 100">
  <path d="M33 80 Q35 66 46 58 L31 64 Q20 66 16 57 Q13 48 21 42 L36 27 L41 11 L50 21 Q66 23 73 40 Q80 58 72 80 Z"/>
  <path d="M55 27 Q66 37 68 56" style="fill:none;stroke:var(--detail);stroke-width:4"/>
  <circle cx="39" cy="36" r="4" style="fill:var(--detail);stroke:none"/><rect x="22" y="78" width="56" height="12" rx="6"/>
</symbol>
<symbol id="cat" viewBox="0 0 120 120">
  <!-- body -->
  <path d="M24 122 Q24 90 60 87 Q96 90 96 122 Z" style="fill:#F6A54A;stroke:#23264A;stroke-width:4;stroke-linejoin:round"/>
  <path d="M46 122 Q48 100 60 97 Q72 100 74 122 Z" style="fill:#FFE7C2"/>
  <!-- ears -->
  <path d="M27 50 L27 15 L53 34 Z" style="fill:#F6A54A;stroke:#23264A;stroke-width:4;stroke-linejoin:round"/>
  <path d="M93 50 L93 15 L67 34 Z" style="fill:#F6A54A;stroke:#23264A;stroke-width:4;stroke-linejoin:round"/>
  <path d="M32 40 L32 25 L45 34 Z" style="fill:#FF9FB0"/>
  <path d="M88 40 L88 25 L75 34 Z" style="fill:#FF9FB0"/>
  <!-- head -->
  <ellipse cx="60" cy="58" rx="37" ry="31" style="fill:#F6A54A;stroke:#23264A;stroke-width:4"/>
  <path d="M53 29 L55 37 M60 27.5 L60 36 M67 29 L65 37" style="fill:none;stroke:#D97C25;stroke-width:3.5;stroke-linecap:round"/>
  <ellipse cx="60" cy="72" rx="16" ry="11" style="fill:#FFE7C2"/>
  <ellipse cx="35" cy="69" rx="6" ry="3.6" style="fill:#FF7A93;opacity:.6"/>
  <ellipse cx="85" cy="69" rx="6" ry="3.6" style="fill:#FF7A93;opacity:.6"/>
  <!-- eyes + glasses -->
  <circle cx="45" cy="55" r="4.2" style="fill:#23264A"/><circle cx="46.6" cy="53.5" r="1.5" style="fill:#fff"/>
  <circle cx="75" cy="55" r="4.2" style="fill:#23264A"/><circle cx="76.6" cy="53.5" r="1.5" style="fill:#fff"/>
  <circle cx="45" cy="55" r="11" style="fill:rgba(255,255,255,.25);stroke:#23264A;stroke-width:3.5"/>
  <circle cx="75" cy="55" r="11" style="fill:rgba(255,255,255,.35);stroke:#23264A;stroke-width:3.5"/>
  <path d="M56 54 Q60 50.5 64 54" style="fill:none;stroke:#23264A;stroke-width:3.5;stroke-linecap:round"/>
  <path d="M34 53 L24 50 M86 53 L96 50" style="fill:none;stroke:#23264A;stroke-width:3;stroke-linecap:round"/>
  <!-- nose, mouth, whiskers -->
  <path d="M56 66 L64 66 L60 70.5 Z" style="fill:#FF7A93;stroke:#23264A;stroke-width:2;stroke-linejoin:round"/>
  <path d="M60 70.5 Q60 75 55.5 75 M60 70.5 Q60 75 64.5 75" style="fill:none;stroke:#23264A;stroke-width:2.6;stroke-linecap:round"/>
  <path d="M45 71 L25 68 M45 75 L26 78 M75 71 L95 68 M75 75 L94 78" style="fill:none;stroke:#23264A;stroke-width:2;stroke-linecap:round"/>
  <!-- bow tie -->
  <path d="M60 92 L47 85 L47 99 Z M60 92 L73 85 L73 99 Z" style="fill:#FF5C7A;stroke:#23264A;stroke-width:3;stroke-linejoin:round"/>
  <circle cx="60" cy="92" r="4" style="fill:#FF5C7A;stroke:#23264A;stroke-width:3"/>
  <!-- mortarboard -->
  <path d="M45 34 Q60 28 75 34 L74 40 Q60 35 46 40 Z" style="fill:#2B2E57;stroke:#23264A;stroke-width:3;stroke-linejoin:round"/>
  <path d="M34 28 L61 17 L88 26 L61 36 Z" style="fill:#363A72;stroke:#23264A;stroke-width:3.5;stroke-linejoin:round"/>
  <path d="M61 26 Q76 27 82 31 L82 42" style="fill:none;stroke:#FFC83D;stroke-width:3;stroke-linecap:round"/>
  <path d="M78 41 L86 41 L87 50 L77 50 Z" style="fill:#FFC83D;stroke:#23264A;stroke-width:2;stroke-linejoin:round"/>
  <circle cx="61" cy="26" r="3" style="fill:#FFC83D;stroke:#23264A;stroke-width:1.5"/>
  <!-- paw holding a pawn -->
  <g transform="translate(78 78) scale(.34)" class="w" style="fill:#fff;stroke:#23264A;stroke-width:6;stroke-linejoin:round">
    <path d="M27 84 Q28 64 41 55 L59 55 Q72 64 73 84 Z"/><rect x="36" y="49" width="28" height="9" rx="4.5"/><circle cx="50" cy="34" r="14"/><rect x="22" y="78" width="56" height="12" rx="6"/>
  </g>
  <ellipse cx="95" cy="110" rx="10" ry="7.5" style="fill:#F6A54A;stroke:#23264A;stroke-width:3.5"/>
  <path d="M91 106 L91 110 M95 105.5 L95 110 M99 106 L99 110" style="fill:none;stroke:#23264A;stroke-width:1.8;stroke-linecap:round"/>
</symbol>
</defs></svg>`;

  const h = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (s, r = document) => r.querySelector(s);
  const reduceMotion = () => !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  function injectSprite() { if (!document.getElementById('pc-p')) document.body.insertAdjacentHTML('afterbegin', SPRITE); }

  const cat = (cls = '') => `<svg class="cat ${cls}" viewBox="0 0 120 120" aria-hidden="true"><use href="#cat"/></svg>`;
  const piece = p => `<svg class="piece-svg" viewBox="0 0 100 100"><use href="#pc-${p.toLowerCase()}"/></svg>`;
  const star = cls => `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="${cls}" d="M12 1.8l3 6.4 7 .8-5.2 4.8 1.4 6.9L12 17.2l-6.2 3.5 1.4-6.9L2 9l7-.8z"/></svg>`;
  const heart = cls => `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="${cls}" d="M12 21s-8.5-5.3-8.5-11.4C3.5 6.5 5.8 4.5 8.3 4.5c1.7 0 3 .9 3.7 2.2.7-1.3 2-2.2 3.7-2.2 2.5 0 4.8 2 4.8 5.1C20.5 15.7 12 21 12 21z"/></svg>`;
  const miniStars = n => '★'.repeat(n) + '☆'.repeat(3 - n);

  /* --- sound (WebAudio, no files) --- */
  let ac = null, muted = false;
  function audio() {
    if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; } }
    if (ac && ac.state === 'suspended') ac.resume().catch(() => {});
    return ac;
  }
  function beep(notes, o = {}) {
    if (muted) return;
    const a = audio(); if (!a) return;
    const { type = 'triangle', dur = 0.13, gap = 0.09, vol = 0.12 } = o;
    let t = a.currentTime + 0.01;
    for (const f of notes) {
      const osc = a.createOscillator(), g = a.createGain();
      osc.type = type; osc.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(g).connect(a.destination); osc.start(t); osc.stop(t + dur + 0.03); t += gap;
    }
  }
  const sound = {
    setMuted(v) { muted = !!v; }, unlock: audio,
    move: () => beep([620], { dur: 0.07, vol: 0.09 }),
    capture: () => beep([440, 300], { dur: 0.09, gap: 0.05, vol: 0.11 }),
    check: () => beep([880, 700], { dur: 0.1, gap: 0.07 }),
    good: () => beep([660, 880], { gap: 0.08, dur: 0.12 }),
    bad: () => beep([200, 160], { type: 'square', dur: 0.15, gap: 0.11, vol: 0.05 }),
    win: () => beep([523, 659, 784, 1047], { gap: 0.1, dur: 0.2 }),
    big: () => beep([523, 659, 784, 1047, 784, 1047, 1319], { gap: 0.11, dur: 0.22 }),
  };
  const vibrate = ms => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* ignore */ } };

  function confetti(count = 90) {
    if (reduceMotion()) return;
    let cv = document.getElementById('confetti');
    if (!cv) { cv = h('<canvas id="confetti" aria-hidden="true"></canvas>'); document.body.append(cv); }
    const ctx = cv.getContext('2d'), dpr = window.devicePixelRatio || 1;
    const W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr;
    const cols = ['#FFC83D', '#FF5C7A', '#5CC181', '#72C8F2', '#B7A6F2', '#FFFFFF'];
    const ps = Array.from({ length: count }, () => ({
      x: W * (0.2 + Math.random() * 0.6), y: H * 0.35, vx: (Math.random() - 0.5) * 18 * dpr, vy: (-10 - Math.random() * 14) * dpr,
      s: (6 + Math.random() * 8) * dpr, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: cols[Math.floor(Math.random() * cols.length)],
    }));
    const t0 = performance.now();
    (function frame(t) {
      ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.vy += 0.55 * dpr; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.strokeStyle = '#23264A'; ctx.lineWidth = 2 * dpr;
        ctx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.66); ctx.strokeRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.66); ctx.restore();
      }
      if (t - t0 < 2600) requestAnimationFrame(frame); else ctx.clearRect(0, 0, W, H);
    })(t0);
  }

  let toastTimer = 0;
  function toast(text) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const t = h('<div class="toast" role="status"></div>'); t.textContent = text;
    document.body.append(t); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.remove(), 3200);
  }
  function modal(el, onClose) {
    const bd = h('<div class="modal-bd" role="dialog" aria-modal="true"></div>');
    const box = h('<div class="modal card"></div>'); box.append(el); bd.append(box); document.body.append(bd);
    const onKey = e => { if (e.key === 'Escape') close(); };
    function close(silent) { if (!bd.isConnected) return; bd.remove(); document.removeEventListener('keydown', onKey); if (onClose && silent !== true) onClose(); }
    bd.addEventListener('click', e => { if (e.target === bd) close(); });
    document.addEventListener('keydown', onKey);
    const f = box.querySelector('input,button'); if (f) setTimeout(() => f.focus(), 30);
    return close;
  }
  function confirm(text, yesLabel, onYes) {
    const el = h('<div><h2></h2><div class="row2"><button class="btn ghost" data-no></button><button class="btn" data-yes></button></div></div>');
    el.querySelector('h2').textContent = text; el.querySelector('[data-yes]').textContent = yesLabel; el.querySelector('[data-no]').textContent = Texts.t('stay');
    const close = modal(el);
    el.querySelector('[data-no]').onclick = close;
    el.querySelector('[data-yes]').onclick = () => { close(); onYes(); };
  }

  return { injectSprite, h, esc, $, reduceMotion, cat, piece, star, heart, miniStars, sound, vibrate, confetti, toast, modal, confirm };
})();
