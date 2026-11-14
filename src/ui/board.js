/* ui/board.js — BoardController: draws a position, animates moves, shows marks
   (last move, check, legal targets, hints, arrows) and turns drag/tap into move
   attempts. It knows chess rules only through ChessCore; it knows nothing about
   puzzles — whoever owns it decides what a move attempt means via onAttempt(move). */
class BoardController {
  constructor(el, { onAttempt } = {}) {
    this.el = el;
    this.onAttempt = onAttempt || (() => {});
    this.state = null;
    this.orient = 'w';
    this.mover = null;      // colour allowed to move, or null when input is off
    this.pieces = new Array(64);
    this.squares = new Array(64);
    this.sel = -1; this.targets = []; this.drag = null; this.hover = -1;
    el.classList.add('board');
    el.setAttribute('aria-label', Texts.t('board'));
    this._h = {
      down: e => this._onDown(e), move: e => this._onMove(e), up: e => this._onUp(e),
      cancel: () => this._onCancel(), menu: e => e.preventDefault(),
    };
    el.addEventListener('pointerdown', this._h.down);
    el.addEventListener('pointermove', this._h.move);
    el.addEventListener('pointerup', this._h.up);
    el.addEventListener('pointercancel', this._h.cancel);
    el.addEventListener('contextmenu', this._h.menu);
  }

  destroy() {
    const el = this.el, H = this._h;
    el.removeEventListener('pointerdown', H.down); el.removeEventListener('pointermove', H.move);
    el.removeEventListener('pointerup', H.up); el.removeEventListener('pointercancel', H.cancel);
    el.removeEventListener('contextmenu', H.menu);
  }

  /* ---------- geometry ---------- */
  rc(i) { const r = i >> 3, c = i & 7; return this.orient === 'w' ? [r, c] : [7 - r, 7 - c]; }
  idxAt(r, c) { return this.orient === 'w' ? r * 8 + c : (7 - r) * 8 + (7 - c); }
  _metrics() { const rect = this.el.getBoundingClientRect(), w = this.el.clientWidth; return { rect, w, off: (rect.width - w) / 2 }; }
  squareAt(x, y) {
    const { rect, w, off } = this._metrics();
    const c = Math.floor((x - rect.left - off) / w * 8), r = Math.floor((y - rect.top - off) / w * 8);
    return r < 0 || r > 7 || c < 0 || c > 7 ? -1 : this.idxAt(r, c);
  }
  _place(el, i) { const [r, c] = this.rc(i); el.style.transform = `translate(${c * 100}%, ${r * 100}%)`; }

  /* ---------- drawing ---------- */
  setPosition(state, orient) {
    this.state = state; this.orient = orient || this.orient;
    this.sel = -1; this.targets = []; this.drag = null;
    const el = this.el; el.innerHTML = '';
    const sqs = UI.h('<div class="sqs"></div>');
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
      const i = this.idxAt(r, c), name = ChessCore.sqName(i);
      const d = document.createElement('div');
      d.className = 'sq ' + ((r + c) % 2 ? 'd' : 'l');
      if (r === 7) d.append(UI.h(`<span class="coord f">${name[0]}</span>`));
      if (c === 0) d.append(UI.h(`<span class="coord r">${name[1]}</span>`));
      this.squares[i] = d; sqs.append(d);
    }
    const layer = UI.h('<div class="pcs"></div>');
    this.pieces = new Array(64);
    state.board.forEach((p, i) => {
      if (!p) return;
      const e = UI.h(`<div class="pc ${ChessCore.colorOf(p)}">${UI.piece(p)}</div>`);
      this._place(e, i); this.pieces[i] = e; layer.append(e);
    });
    this.arrows = UI.h('<svg class="arrows" viewBox="0 0 800 800" aria-hidden="true"></svg>');
    el.append(sqs, layer, this.arrows);
    this._updateCheck();
  }

  setInteractive(color) { this.mover = color || null; if (!this.mover) this._clearSelection(); }

  /** Apply a legal move to the position and animate it. Returns the new status. */
  playMove(m) {
    this.state = ChessCore.make(this.state, m);
    this._animate(m);
    this.setLastMove(m);
    this._updateCheck();
    this.clearHints();
    const status = ChessCore.status(this.state);
    if (status === 'check') UI.sound.check();
    else if (status !== 'mate') (m.captured ? UI.sound.capture : UI.sound.move)();
    return status;
  }

  /** Show that an attempted move was not accepted: piece returns, square flashes. */
  reject(m) {
    this._clearSelection();
    const pe = this.pieces[m.from];
    if (pe) { this._place(pe, m.from); pe.classList.remove('shake'); void pe.offsetWidth; pe.classList.add('shake'); }
    const sq = this.squares[m.to];
    if (sq) { sq.classList.remove('bad'); void sq.offsetWidth; sq.classList.add('bad'); setTimeout(() => sq.classList.remove('bad'), 800); }
  }

  setLastMove(m) {
    this.squares.forEach(s => s && s.classList.remove('last'));
    if (m) { this.squares[m.from].classList.add('last'); this.squares[m.to].classList.add('last'); }
  }
  markHint(sq) { this.squares[sq].classList.add('hint'); }
  clearHints() { this.squares.forEach(s => s && s.classList.remove('hint')); if (this.arrows) this.arrows.innerHTML = ''; }
  showArrow(from, to, kind) {
    if (!this.arrows) return;
    const [r1, c1] = this.rc(from), [r2, c2] = this.rc(to);
    const x1 = c1 * 100 + 50, y1 = r1 * 100 + 50, x2 = c2 * 100 + 50, y2 = r2 * 100 + 50;
    const len = Math.hypot(x2 - x1, y2 - y1) - 14, ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    const hw = 9, hl = 38, hh = 28;
    const pts = `0,${-hw} ${len - hl},${-hw} ${len - hl},${-hh} ${len},0 ${len - hl},${hh} ${len - hl},${hw} 0,${hw}`;
    const fill = kind === 'hint' ? '#FFC83D' : '#5CC181';
    this.arrows.insertAdjacentHTML('beforeend', `<polygon points="${pts}" transform="translate(${x1} ${y1}) rotate(${ang})" fill="${fill}" stroke="#23264A" stroke-width="5" stroke-linejoin="round" opacity=".95"/>`);
  }

  _updateCheck() {
    this.squares.forEach(s => s && s.classList.remove('check'));
    if (this.state && ChessCore.inCheck(this.state)) {
      const k = ChessCore.kingSq(this.state.board, this.state.turn);
      if (k >= 0) this.squares[k].classList.add('check');
    }
  }

  _animate(m) {
    const capSq = m.flag === 'e' ? ((m.from & ~7) | (m.to & 7)) : m.to;
    const victim = this.pieces[capSq];
    if (victim && capSq !== m.from) { victim.classList.add('gone'); setTimeout(() => victim.remove(), 230); this.pieces[capSq] = null; }
    const pe = this.pieces[m.from]; this.pieces[m.from] = null; this.pieces[m.to] = pe;
    if (pe) {
      pe.classList.remove('drag'); this._place(pe, m.to);
      if (m.promo) setTimeout(() => { const u = pe.querySelector('use'); if (u) u.setAttribute('href', '#pc-' + m.promo); }, 180);
    }
    if (m.flag === 'k' || m.flag === 'q') {
      const rf = m.flag === 'k' ? m.to + 1 : m.to - 2, rt = m.flag === 'k' ? m.to - 1 : m.to + 1;
      const rook = this.pieces[rf]; this.pieces[rf] = null; this.pieces[rt] = rook; if (rook) this._place(rook, rt);
    }
  }

  /* ---------- selection & input ---------- */
  _canMove() { return !!(this.mover && this.state && this.state.turn === this.mover); }
  _clearSelection() {
    this.sel = -1; this.targets = [];
    this.squares.forEach(s => s && s.classList.remove('sel', 'dot', 'cap', 'hover'));
  }
  _select(i) {
    this._clearSelection(); this.sel = i;
    const seen = new Set();
    this.targets = ChessCore.legal(this.state).filter(m => m.from === i && !seen.has(m.to) && seen.add(m.to));
    this.squares[i].classList.add('sel');
    for (const m of this.targets) this.squares[m.to].classList.add(m.captured ? 'cap' : 'dot');
  }
  _setHover(i) {
    if (this.hover === i) return;
    if (this.hover >= 0 && this.squares[this.hover]) this.squares[this.hover].classList.remove('hover');
    this.hover = i;
    if (i >= 0 && this.targets.some(m => m.to === i)) this.squares[i].classList.add('hover');
  }
  _onDown(e) {
    if (e.target.closest('.promo') || e.button > 0) return;
    UI.sound.unlock();
    if (!this._canMove()) return;
    const i = this.squareAt(e.clientX, e.clientY); if (i < 0) return;
    const p = this.state.board[i], mine = p && ChessCore.colorOf(p) === this.mover;
    if (!mine) {
      if (this.sel >= 0 && this.targets.some(m => m.to === i)) this._attempt(this.sel, i); else this._clearSelection();
      return;
    }
    const wasSelected = this.sel === i;
    this._select(i);
    this.drag = { i, pe: this.pieces[i], x0: e.clientX, y0: e.clientY, moved: false, wasSelected, id: e.pointerId };
    try { this.el.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    e.preventDefault();
  }
  _onMove(e) {
    const d = this.drag; if (!d || e.pointerId !== d.id || !d.pe) return;
    if (!d.moved && Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < 7) return;
    if (!d.moved) { d.moved = true; d.pe.classList.add('drag'); }
    const { rect, w, off } = this._metrics(), s = w / 8;
    d.pe.style.transform = `translate(${e.clientX - rect.left - off - s / 2}px, ${e.clientY - rect.top - off - s / 2}px)`;
    this._setHover(this.squareAt(e.clientX, e.clientY));
  }
  _onUp(e) {
    const d = this.drag; if (!d || e.pointerId !== d.id) return;
    this.drag = null; this._setHover(-1);
    if (d.pe) d.pe.classList.remove('drag');
    if (d.moved) {
      const to = this.squareAt(e.clientX, e.clientY);
      if (to >= 0 && to !== d.i && this.targets.some(m => m.to === to)) this._attempt(d.i, to);
      else if (d.pe) this._place(d.pe, d.i);
    } else if (d.wasSelected) this._clearSelection();
  }
  _onCancel() {
    const d = this.drag; this.drag = null; this._setHover(-1);
    if (d && d.pe) { d.pe.classList.remove('drag'); this._place(d.pe, d.i); }
  }
  _attempt(from, to) {
    const cands = ChessCore.legal(this.state).filter(m => m.from === from && m.to === to);
    this._clearSelection();
    if (!cands.length) { if (this.pieces[from]) this._place(this.pieces[from], from); return; }
    if (cands.length > 1 && cands[0].promo) {
      if (this.pieces[from]) this._place(this.pieces[from], from);
      this._askPromotion(cands).then(m => { if (m && this._canMove()) this.onAttempt(m); });
      return;
    }
    this.onAttempt(cands[0]);
  }
  _askPromotion(cands) {
    return new Promise(res => {
      const ov = UI.h(`<div class="promo"><div class="promo-card"><p>${Texts.t('promoAsk')}</p><div class="promo-row"></div></div></div>`);
      const row = ov.querySelector('.promo-row');
      for (const t of ['q', 'r', 'b', 'n']) {
        const m = cands.find(x => x.promo === t); if (!m) continue;
        const b = UI.h(`<button class="promo-btn ${this.mover}" aria-label="${Texts.pieceName(t)}">${UI.piece(t)}</button>`);
        b.onclick = ev => { ev.stopPropagation(); ov.remove(); res(m); };
        row.append(b);
      }
      ov.addEventListener('pointerdown', ev => { ev.stopPropagation(); if (ev.target === ov) { ov.remove(); res(null); } });
      this.el.append(ov);
    });
  }
}
