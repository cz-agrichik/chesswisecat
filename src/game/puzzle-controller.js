/* game/puzzle-controller.js — PuzzleController runs one puzzle on a BoardController.
   Lichess convention: moves[0] is the opponent's move, then the child and the
   opponent alternate. Any checkmating move is accepted even if it differs from
   the stored line. The controller emits events; the screen decides what to say.

   Events (onEvent(type, data)):
     'intro'          — position shown, opponent is about to move
     'your-turn'      — child to move ({ first: true } for the first move)
     'correct'        — right move, opponent will reply
     'wrong'          — { left } tries remaining
     'out-of-tries'   — the answer will be shown next
     'solved'         — { stars, mistakes, hints }
     'solution-start' — the correct line is being played out
     'solution-done'  — { line: [{ state, move, mine }] }
     'broken'         — the puzzle data could not be played                   */
class PuzzleController {
  constructor(board, puzzle, { tries = 3, onEvent } = {}) {
    this.board = board;
    this.p = puzzle;
    this.tries = tries;
    this.emit = onEvent || (() => {});
    this.timers = new Set();
    this.ply = 0; this.mistakes = 0; this.hints = 0;
    this.hintPly = -1; this.hintLevel = 0;
    this.phase = 'idle';   // intro | player | opponent | solved | failed | solution
    this.result = null;
    board.onAttempt = m => this._attempt(m);
  }

  later(ms, fn) { const t = setTimeout(() => { this.timers.delete(t); fn(); }, ms); this.timers.add(t); }
  clearTimers() { for (const t of this.timers) clearTimeout(t); this.timers.clear(); }
  dispose() { this.clearTimers(); this.board.setInteractive(null); this.board.onAttempt = () => {}; }

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

  _toPlayer(first) { this.phase = 'player'; this.board.setInteractive(this.player); this.emit('your-turn', { first }); }
  _expected() { return ChessCore.findMove(this.board.state, this.p.moves[this.ply]); }

  _attempt(m) {
    if (this.phase !== 'player') return;
    const exp = this._expected();
    const mates = ChessCore.status(ChessCore.make(this.board.state, m)) === 'mate';
    if (exp && (ChessCore.uci(m) === ChessCore.uci(exp) || mates)) {
      const status = this.board.playMove(m);
      this.ply++;
      if (status === 'mate' || this.ply >= this.p.moves.length) return this._solved();
      this.phase = 'opponent'; this.board.setInteractive(null);
      this.emit('correct');
      this.later(800, () => {
        const om = this._expected();
        if (!om) return this._solved();
        this.board.playMove(om); this.ply++;
        this.later(250, () => this._toPlayer(false));
      });
      return;
    }
    this.mistakes++;
    this.board.reject(m);
    const left = this.tries - this.mistakes;
    if (left > 0) return this.emit('wrong', { left });
    this.phase = 'failed'; this.board.setInteractive(null);
    this.result = { solved: false, stars: 0, mistakes: this.mistakes, hints: this.hints };
    this.emit('out-of-tries');
    this.later(800, () => this._playLine(ChessCore.toFEN(this.board.state), this.ply));
  }

  _solved() {
    this.phase = 'solved'; this.board.setInteractive(null);
    this.result = { solved: true, stars: Math.max(1, 3 - this.mistakes - this.hints), mistakes: this.mistakes, hints: this.hints };
    this.emit('solved', this.result);
  }

  canHint() { return this.phase === 'player' && !(this.hintPly === this.ply && this.hintLevel >= 2); }
  /** First press marks the piece, second press draws the arrow. Each costs a star (max two). */
  hint() {
    if (!this.canHint()) return null;
    const exp = this._expected(); if (!exp) return null;
    if (this.hintPly !== this.ply) { this.hintPly = this.ply; this.hintLevel = 0; }
    this.hints = Math.min(2, this.hints + 1);
    if (this.hintLevel === 0) { this.hintLevel = 1; this.board.markHint(exp.from); return { level: 1, piece: ChessCore.typeOf(exp.piece) }; }
    this.hintLevel = 2; this.board.showArrow(exp.from, exp.to, 'hint'); return { level: 2 };
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

  replaySolution() {
    this.clearTimers();
    this.board.setPosition(ChessCore.parseFEN(this.startFen), this.player);
    this.board.setLastMove(this.firstMove);
    this._playLine(this.startFen, 1);
  }

  _playLine(fen, fromPly) {
    this.phase = 'solution'; this.board.setInteractive(null);
    this.emit('solution-start');
    const steps = []; let s = ChessCore.parseFEN(fen);
    for (let i = fromPly; i < this.p.moves.length; i++) {
      const m = ChessCore.findMove(s, this.p.moves[i]); if (!m) break;
      steps.push({ m, mine: i % 2 === 1 }); s = ChessCore.make(s, m);
    }
    let k = 0;
    const next = () => {
      if (k >= steps.length) return this.later(500, () => this.emit('solution-done', { line: this.line() }));
      const { m, mine } = steps[k++];
      if (mine) {
        this.board.clearHints(); this.board.showArrow(m.from, m.to, 'solution');
        this.later(1100, () => { this.board.playMove(m); this.later(750, next); });
      } else { this.board.playMove(m); this.later(900, next); }
    };
    this.later(600, next);
  }
}
