/* game/puzzle-controller.js — PuzzleController runs one puzzle on a BoardController.
   Lichess convention: moves[0] is the opponent's move, then the child and the
   opponent alternate. Any checkmating move is accepted even if it differs from
   the stored line. The controller emits events; the screen decides what to say.

   Rules: `tries` tries per puzzle. A wrong move or a hint costs one try. When the
   last try is spent, arrows show the correct moves from the current position and
   the child plays them (other moves are just rejected) — "guided" mode.

   Events (onEvent(type, data)):
     'intro'        — position shown, opponent is about to move
     'your-turn'    — child to move ({ first: true } for the first move)
     'correct'      — right move, opponent will reply
     'wrong'        — { left } tries remaining (left > 0)
     'pause'        — { ms } think-pause after a mistake: input is off for ms
     'resume'       — the pause is over, child to move again
     'hint'         — { level: 1, piece } piece marked / { level: 2 } arrow drawn; { left }
     'guided'       — tries are over, arrows will lead the way
     'guide-turn'   — arrow drawn, child to play it
     'guide-wrong'  — child tried another move in guided mode
     'done'         — { mistakes, hints, guided } puzzle finished (mate reached)
     'replay-start' / 'replay-done' — the whole line is being shown again
     'broken'       — the puzzle data could not be played                     */
class PuzzleController {
  constructor(board, puzzle, { tries = 3, onEvent, pauseMs } = {}) {
    this.board = board;
    this.p = puzzle;
    this.tries = tries;
    this.pauseMs = pauseMs || (() => 0);   // k-th mistake → pause length, ms
    this.emit = onEvent || (() => {});
    this.timers = new Set();
    this.ply = 0; this.mistakes = 0; this.hints = 0; this.guided = false;
    this.hintPly = -1; this.hintLevel = 0;
    this.phase = 'idle';   // intro | player | paused | opponent | done | replay
    this.result = null;
    board.onAttempt = m => this._attempt(m);
  }

  later(ms, fn) { const t = setTimeout(() => { this.timers.delete(t); fn(); }, ms); this.timers.add(t); }
  clearTimers() { for (const t of this.timers) clearTimeout(t); this.timers.clear(); }
  dispose() { this.clearTimers(); this.board.setInteractive(null); this.board.onAttempt = () => {}; }

  /** Tries spent so far (mistakes + hints). */
  get used() { return this.mistakes + this.hints; }
  get left() { return Math.max(0, this.tries - this.used); }

  start() {
    let st;
    try { st = ChessCore.parseFEN(this.p.fen); } catch (e) { return this.emit('broken'); }
    this.player = ChessCore.other(st.turn);
    this.board.setPosition(st, this.player);
    this.board.setInteractive(null);
    this.phase = 'intro'; this.emit('intro');
    this.later(900, () => {
      const m = ChessCore.findMove(this.board.state, this.p.moves[0]);
      if (!m) return this.emit('broken');
      this.board.playMove(m);
      this.firstMove = m; this.ply = 1; this.startFen = ChessCore.toFEN(this.board.state);
      this._toPlayer(true);
    });
  }

  _expected() { return ChessCore.findMove(this.board.state, this.p.moves[this.ply]); }
  _toPlayer(first) {
    this.phase = 'player';
    this.board.setInteractive(this.player);
    if (this.guided) { this._drawGuide(); this.emit('guide-turn', { first }); }
    else this.emit('your-turn', { first });
  }
  _drawGuide() {
    const exp = this._expected(); if (!exp) return;
    this.board.clearHints(); this.board.showArrow(exp.from, exp.to, 'solution');
  }

  _attempt(m) {
    if (this.phase !== 'player') return;
    const exp = this._expected();
    const mates = ChessCore.status(ChessCore.make(this.board.state, m)) === 'mate';
    if (exp && (ChessCore.uci(m) === ChessCore.uci(exp) || mates)) {
      const status = this.board.playMove(m);
      this.ply++;
      if (status === 'mate' || this.ply >= this.p.moves.length) return this._done();
      this.phase = 'opponent'; this.board.setInteractive(null);
      if (!this.guided) this.emit('correct');
      this.later(800, () => {
        const om = this._expected();
        if (!om) return this._done();
        this.board.playMove(om); this.ply++;
        this.later(250, () => this._toPlayer(false));
      });
      return;
    }
    this.board.reject(m);
    if (this.guided) return this.emit('guide-wrong');
    this.mistakes++;
    if (this.left <= 0) return this._toGuided();
    this.emit('wrong', { left: this.left });
    const ms = this.pauseMs(this.mistakes);
    if (ms > 0) {   // think-pause: no moves until it runs out
      this.phase = 'paused'; this.board.setInteractive(null);
      this.emit('pause', { ms });
      this.later(ms, () => {
        if (this.phase !== 'paused') return;
        this.phase = 'player'; this.board.setInteractive(this.player);
        this.emit('resume');
      });
    }
  }

  _toGuided() {
    this.guided = true;
    this.phase = 'opponent'; this.board.setInteractive(null);
    this.emit('guided');
    this.later(900, () => this._toPlayer(true));
  }

  _done() {
    this.phase = 'done'; this.board.setInteractive(null); this.board.clearHints();
    this.result = { mistakes: this.mistakes, hints: this.hints, guided: this.guided };
    this.emit('done', this.result);
  }

  canHint() { return this.phase === 'player' && !this.guided && !(this.hintPly === this.ply && this.hintLevel >= 2); }
  /** First press marks the piece, second press draws the arrow. Each press costs a try. */
  hint() {
    if (!this.canHint()) return null;
    const exp = this._expected(); if (!exp) return null;
    if (this.hintPly !== this.ply) { this.hintPly = this.ply; this.hintLevel = 0; }
    this.hints++;
    if (this.left <= 0) { this._toGuided(); return { level: 'guided' }; }
    if (this.hintLevel === 0) {
      this.hintLevel = 1; this.board.markHint(exp.from);
      const r = { level: 1, piece: ChessCore.typeOf(exp.piece), left: this.left }; this.emit('hint', r); return r;
    }
    this.hintLevel = 2; this.board.showArrow(exp.from, exp.to, 'hint');
    const r = { level: 2, left: this.left }; this.emit('hint', r); return r;
  }

  /** Full correct line from the child's first move. */
  line() {
    const out = []; let s = ChessCore.parseFEN(this.startFen);
    for (let i = 1; i < this.p.moves.length; i++) {
      const m = ChessCore.findMove(s, this.p.moves[i]); if (!m) break;
      out.push({ state: s, move: m, mine: i % 2 === 1 }); s = ChessCore.make(s, m);
    }
    return out;
  }

  /** Show the whole solution again from the start, automatically. */
  replaySolution() {
    if (!this.startFen) return;
    this.clearTimers();
    this.phase = 'replay'; this.board.setInteractive(null);
    this.board.setPosition(ChessCore.parseFEN(this.startFen), this.player);
    this.board.setLastMove(this.firstMove);
    this.emit('replay-start');
    const steps = this.line();
    let k = 0;
    const next = () => {
      if (k >= steps.length) return this.later(400, () => { this.phase = 'done'; this.emit('replay-done'); });
      const { move, mine } = steps[k++];
      if (mine) {
        this.board.clearHints(); this.board.showArrow(move.from, move.to, 'solution');
        this.later(1100, () => { this.board.playMove(move); this.later(750, next); });
      } else { this.board.playMove(move); this.later(900, next); }
    };
    this.later(600, next);
  }
}
