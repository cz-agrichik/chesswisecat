/* game/opening-controller.js — OpeningController: learning one opening (a PGN study,
   see core/pgn.js) on a BoardController. The child goes through every line of the
   study, branch by branch: at every fork of the opponent a reply is picked at random,
   weighted by how much there is to learn down it; at the end of a branch the moves
   are taken back to the nearest fork with replies still to learn, and so on
   (Pgn.lines with rnd). The main line is just one of the branches, it may come later.
   Before a new line the moves are taken back on the board, one by one, to the fork.

   At each of the child's moves:
   - the main move of the study → correct, go on;
   - another good move from the study → no life lost: the board blinks green for a
     moment ("good too"), then an arrow shows the main move and the child plays it;
   - any other move → a life is lost and a think-pause follows (always one pause long);
     the second such mistake on the same move → the arrow shows the move.
   When the lives are over the child still goes through the whole study, but every
   mistake shows the arrow at once ("tour" mode).

   Points (CONFIG.openings): every line is celebrated; finished with lives left it gives
   mainLine (the main line) or sideLine (each other line); at the end perLife for every
   life left, or tourBonus if the lives were all spent. Opening.max(game) is the most.

   Events (onEvent(type, data)):
     'line-start'  — { index, main, count } a line begins (index: how many lines are
                     done before it, main: it is the main line); for the
                     next lines this comes before the moves are taken back
     'your-turn'   — { first } the child to move
     'correct'     — { node } the main move was played (node.nag may be '!', '!?' …)
     'guided-move' — { node } the arrow move was played
     'alt'         — { node, ms } another good move: the board blinks green for ms,
                     then the arrow shows the main one ('guide-turn')
     'wrong'       — { lives, arrow } a mistake; arrow: the move is shown now
     'pause' / 'resume' — { ms } think-pause after a mistake
     'tour'        — the lives are over: arrows from now on
     'guide-turn'  — the child is to play the arrow move
     'guide-wrong' — another move while the arrow is shown (no penalty)
     'line-done'   — { index, main, bonus, last } a line is finished;
                     the next line (if not last) starts after a short celebration
     'done'        — { main, lines, end, total, lives, tour } the whole study is finished:
                     main + lines (the other lines) + end (lives or tour bonus)   */
class OpeningController {
  constructor(board, game, { lives = 5, pauseMs = 0, onEvent, rnd = Math.random } = {}) {
    this.board = board;
    this.game = game;
    this.player = game.player;
    this.lines = Pgn.lines(game.root, game.player, rnd);   // in the order they are learned
    this.order = this.lines.map((_, i) => i);
    this.total = this.lines.reduce((a, l) => a + l.moves.length, 0);
    this.lives = lives; this.startLives = lives;
    this.pauseMs = pauseMs;
    this.emit = onEvent || (() => {});
    this.timers = new Set();
    this.done = 0; this.tour = false; this.mainBonus = 0; this.linesBonus = 0;
    this.li = 0; this.k = 0; this.pos = 0; this.cur = null; this.guide = false; this.nodeMistakes = 0;
    this.phase = 'idle';   // intro | opponent | player | paused | between | done
    board.onAttempt = m => this._attempt(m);
  }

  later(ms, fn) { const t = setTimeout(() => { this.timers.delete(t); fn(); }, ms); this.timers.add(t); }
  dispose() { for (const t of this.timers) clearTimeout(t); this.timers.clear(); this.board.setInteractive(null); this.board.onAttempt = () => {}; }

  start() { this._startLine(0); }

  /** Moves from the start to the current position: [{ san, nag, mine }]. */
  movesSoFar() {
    const L = this.lines[this.li]; if (!L) return [];
    return L.path.slice(0, this.pos).map(n => ({ san: n.san, nag: n.nag, mine: n.parent.state.turn === this.player }));
  }
  get node() { const L = this.lines[this.li]; return L ? L.path[this.pos] : null; }

  _startLine(k) {
    const prev = k ? this.lines[this.order[k - 1]] : null;
    const i = this.order[k];
    this.k = k; this.li = i;
    const L = this.lines[i];
    this.board.setInteractive(null);
    this.phase = 'intro';
    this.emit('line-start', { index: k, main: L.main, count: this.lines.length });
    if (!prev) {
      this.pos = L.from;
      this.board.setPosition(this.game.root.state, this.player);
      return this.later(800, () => this._advance(true));
    }
    // take the moves back, one by one, to where the two lines part …
    let common = 0;
    while (common < prev.path.length && common < L.path.length && prev.path[common] === L.path[common]) common++;
    let at = prev.path.length;
    const ready = () => { this.pos = L.from; this.board.setLastMove(L.from ? L.path[L.from - 1].move : null); this.later(900, () => this._advance(true)); };
    const forward = () => {   // … then forward again, the moves already learned, to where the new line starts
      if (at >= L.from) return ready();
      this._play(L.path[at++]);
      this.later(380, forward);
    };
    const back = () => {
      if (at <= common) { this.board.clearGlyphs(); return at >= L.from ? ready() : this.later(500, forward); }
      at--;
      const n = prev.path[at];
      this.board.undoMove(n.move, n.parent.state);
      this.later(380, back);
    };
    this.later(900, back);
  }
  /** Play a move of the study on the board, with its mark (!, !?) if it has one. The
      mark of the child's move stays while the opponent answers, until the next move. */
  _play(n) {
    if (n.parent.state.turn === this.player) this.board.clearGlyphs();
    this.board.playMove(n.move);
    if (n.nag) this.board.showGlyph(n.move.to, n.nag);
  }

  _advance(first) {
    const L = this.lines[this.li];
    if (this.pos >= L.path.length) return this._lineDone();
    const n = this.node;
    if (n.parent.state.turn !== this.player) {   // the opponent's move
      this.phase = 'opponent';
      this._play(n); this.pos++;
      this.later(380, () => this._advance(first));
      return;
    }
    if (this.cur !== n) { this.cur = n; this.guide = false; this.nodeMistakes = 0; }
    this.phase = 'player';
    this.board.setInteractive(this.player);
    if (this.guide) { this._arrow(); this.emit('guide-turn'); }
    else this.emit('your-turn', { first });
  }
  _arrow() { const n = this.node; this.board.clearHints(); this.board.showArrow(n.move.from, n.move.to, 'solution'); }

  _attempt(m) {
    if (this.phase !== 'player') return;
    const n = this.node, uci = ChessCore.uci(m);
    if (uci === n.uci) {
      const guided = this.guide;
      this._play(n); this.pos++; this.done++;
      this.phase = 'opponent'; this.board.setInteractive(null);
      this.emit(guided ? 'guided-move' : 'correct', { node: n });
      this.later(700, () => this._advance(false));
      return;
    }
    this.board.reject(m);
    if (this.guide) return this.emit('guide-wrong');
    const alt = Pgn.alternatives(n).find(a => a.uci === uci);
    if (alt) {   // good too: a green blink, then the arrow to the move we learn
      this.guide = true;
      this.phase = 'paused'; this.board.setInteractive(null);
      this.emit('alt', { node: alt, ms: 1000 });
      this.later(1000, () => {
        if (this.phase !== 'paused') return;
        this.phase = 'player'; this.board.setInteractive(this.player);
        this._arrow(); this.emit('guide-turn');
      });
      return;
    }
    if (this.tour) { this.guide = true; this._arrow(); return this.emit('wrong', { lives: 0, arrow: true }); }
    this.lives--; this.nodeMistakes++;
    if (this.lives <= 0) { this.lives = 0; this.tour = true; this.guide = true; this._arrow(); return this.emit('tour'); }
    if (this.nodeMistakes >= 2) { this.guide = true; this._arrow(); return this.emit('wrong', { lives: this.lives, arrow: true }); }
    this.emit('wrong', { lives: this.lives, arrow: false });
    const ms = this.pauseMs;
    if (ms > 0) {
      this.phase = 'paused'; this.board.setInteractive(null);
      this.emit('pause', { ms });
      this.later(ms, () => {
        if (this.phase !== 'paused') return;
        this.phase = 'player'; this.board.setInteractive(this.player);
        this.emit('resume');
      });
    }
  }

  _lineDone() {
    this.phase = 'between'; this.board.setInteractive(null); this.board.clearHints();
    const P = CONFIG.openings;
    const last = this.k + 1 >= this.order.length;
    const main = this.lines[this.li].main;
    const bonus = this.tour ? 0 : main ? P.mainLine : P.sideLine;
    if (main) this.mainBonus = bonus; else this.linesBonus += bonus;
    this.emit('line-done', { index: this.k, main, bonus, last });
    if (!last) this.later(2600, () => this._startLine(this.k + 1));
    else this.later(300, () => this._finish());
  }

  _finish() {
    const P = CONFIG.openings;
    this.phase = 'done';
    const end = this.tour ? P.tourBonus : P.perLife * this.lives;
    this.emit('done', { main: this.mainBonus, lines: this.linesBonus, end, total: this.mainBonus + this.linesBonus + end, lives: this.lives, tour: this.tour });
  }

  /** The most points a study can give: every line with lives left + all lives at the end. */
  static max(game) {
    const P = CONFIG.openings, n = Pgn.lines(game.root, game.player).length;
    return P.mainLine + (n - 1) * P.sideLine + P.lives * P.perLife;
  }
}
