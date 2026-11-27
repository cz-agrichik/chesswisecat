/* core/pgn.js — reads a PGN study (one or more chapters with variations) into a move
   tree, and turns the tree into the lines a child learns. No DOM.

   Tree: node = { san, nag, uci, move, state (position after the move), parent, children }.
   The root has no move; root.state is the start position. Comments are skipped;
   move marks (!, !?, !!, ?!, ?, ??, $1…$6) are kept in node.nag.

   Lines (Pgn.lines): the child plays one side ("player", from the Orientation header).
   - At the child's turn the first move in the PGN is the move to learn; the other
     moves there are "also good" (accepted as good, but the child is asked to play
     the main one).
   - At the opponent's turn every move in the PGN is a separate line to learn.
   Pgn.lines lists them in depth-first order: down one branch to its end, then back to
   the nearest fork that still has unlearned replies, and down again. Each line knows
   where it parts from the line before it (from): the moves before `from` are already
   learned, the line teaches the rest. In PGN order the main line comes first; with
   `rnd` the replies at every fork of the opponent are shuffled, weighted by how many
   moves are to learn down each reply (3 vs 1 vs 1 → 60% / 20% / 20%), so a child may
   start deep in a side line and come back to the main line later. The main line (the
   first move everywhere) is marked `main`. */
const Pgn = (function () {
  const C = ChessCore;
  const NAGS = { 1: '!', 2: '?', 3: '!!', 4: '??', 5: '!?', 6: '?!' };

  /** Short algebraic notation of a legal move (without +/#). */
  function san(s, m) {
    if (m.flag === 'k') return 'O-O';
    if (m.flag === 'q') return 'O-O-O';
    const t = C.typeOf(m.piece), to = C.sqName(m.to), from = C.sqName(m.from);
    if (t === 'p') return (m.captured ? from[0] + 'x' : '') + to + (m.promo ? '=' + m.promo.toUpperCase() : '');
    const rivals = C.legal(s).filter(x => x.piece === m.piece && x.to === m.to && x.from !== m.from);
    let dis = '';
    if (rivals.length) {
      const sameFile = rivals.some(x => C.sqName(x.from)[0] === from[0]);
      const sameRank = rivals.some(x => C.sqName(x.from)[1] === from[1]);
      dis = !sameFile ? from[0] : !sameRank ? from[1] : from;
    }
    return t.toUpperCase() + dis + (m.captured ? 'x' : '') + to;
  }
  const norm = x => x.replace(/[+#=]/g, '').replace(/0/g, 'O');   // e8=Q ~ e8Q, 0-0 ~ O-O
  /** The legal move written as `token` in this position, or null. */
  function moveFromSan(s, token) {
    const want = norm(token);
    return C.legal(s).find(m => norm(san(s, m)) === want) || null;
  }

  function headersOf(text) {
    const h = {};
    for (const m of text.matchAll(/^\s*\[(\w+)\s+"((?:[^"\\]|\\.)*)"\]/gm)) h[m[1]] = m[2];
    return h;
  }

  /** One PGN game (headers + movetext) → { headers, root, player }. Throws on a bad move. */
  function parseGame(text) {
    const headers = headersOf(text);
    const body = text.replace(/^\s*\[[^\]]*\]\s*$/gm, '');
    const start = C.parseFEN(headers.FEN || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    const root = { san: null, nag: '', uci: null, move: null, state: start, parent: null, children: [] };
    const tokens = body.match(/\{[^}]*\}|;[^\n]*|\(|\)|\$\d+|[!?]{1,2}|\d+\.+|\*|1-0|0-1|1\/2-1\/2|[^\s(){};]+/g) || [];
    let cur = root, last = null;
    const stack = [];
    for (const tok of tokens) {
      if (tok[0] === '{' || tok[0] === ';' || /^\d+\.+$/.test(tok) || /^(\*|1-0|0-1|1\/2-1\/2)$/.test(tok)) continue;
      if (tok === '(') { if (!last) throw new Error('variation without a move'); stack.push({ cur, last }); cur = last.parent; last = null; continue; }
      if (tok === ')') { const s = stack.pop(); if (!s) throw new Error('unbalanced )'); cur = s.cur; last = s.last; continue; }
      if (tok[0] === '$') { if (last) last.nag = NAGS[tok.slice(1)] || last.nag; continue; }
      if (/^[!?]+$/.test(tok)) { if (last) last.nag = tok; continue; }
      const m1 = /^(.+?)([!?]{0,2})$/.exec(tok);
      const sanTok = m1[1], nag = m1[2];
      const mv = moveFromSan(cur.state, sanTok);
      if (!mv) throw new Error(`bad move ${tok} after ${cur.san || 'start'}`);
      const uci = C.uci(mv);
      let node = cur.children.find(n => n.uci === uci);   // the same move twice: merge
      if (!node) {
        node = { san: san(cur.state, mv), nag: '', uci, move: mv, state: C.make(cur.state, mv), parent: cur, children: [] };
        const st = C.status(node.state);
        if (st === 'mate') node.san += '#'; else if (st === 'check') node.san += '+';
        cur.children.push(node);
      }
      if (nag) node.nag = nag;
      cur = node; last = node;
    }
    const o = (headers.Orientation || '').toLowerCase();
    const player = o === 'black' ? 'b' : 'w';
    return { headers, root, player };
  }

  /** A whole study (several games) → array of games. */
  function parseStudy(text) {
    return String(text).split(/\n\s*\n(?=\s*\[Event )/).map(t => t.trim()).filter(t => t).map(parseGame);
  }

  /** Items in a random order, weighted: the first pick is items[i] with chance weight(i) / sum. */
  function weightedShuffle(items, weight, rnd = Math.random) {
    const left = items.slice(), out = [];
    while (left.length) {
      const sum = left.reduce((a, x) => a + weight(x), 0);
      let k = 0;
      if (sum > 0) { let r = rnd() * sum; while (k < left.length - 1 && (r -= weight(left[k])) >= 0) k++; }
      out.push(left.splice(k, 1)[0]);
    }
    return out;
  }

  /** The lines to learn, see the top of the file. Each: { path: [nodes], from: index of
      the first node that is new compared to the lines before, moves: indexes of the
      child's moves in path (only those at or after `from`), main: the main line }.
      rnd (optional): shuffle the opponent's replies at every fork, weighted. */
  function lines(root, player, rnd) {
    const next = node => (node.state.turn === player ? node.children.slice(0, 1) : node.children);
    const W = new Map();   // node → the child's moves to learn below it
    const weight = node => {
      if (!W.has(node)) W.set(node, next(node).reduce((a, c) => a + (node.state.turn === player ? 1 : 0) + weight(c), 0));
      return W.get(node);
    };
    const raw = [];
    (function walk(node, path) {
      const kids = next(node);
      if (!kids.length) { raw.push(path); return; }
      const order = rnd && kids.length > 1 ? weightedShuffle(kids, c => (node.state.turn === player ? 1 : 0) + weight(c), rnd) : kids;
      for (const c of order) walk(c, path.concat(c));
    })(root, []);
    const out = [];
    let prev = [];
    for (const full of raw) {
      // a line ends with the child's last move
      let end = full.length;
      while (end > 0 && full[end - 1].parent.state.turn !== player) end--;
      const path = full.slice(0, end);
      let from = 0;
      while (from < path.length && from < prev.length && path[from] === prev[from]) from++;
      const moves = [];
      for (let i = from; i < path.length; i++) if (path[i].parent.state.turn === player) moves.push(i);
      if (!moves.length) continue;
      out.push({ path, from, moves, main: full.every(n => n === n.parent.children[0]) });
      prev = path;
    }
    return out;
  }

  /** The other good moves at a node where the child is to move (all but the main one). */
  const alternatives = node => node.parent.children.filter(n => n !== node);

  return { san, moveFromSan, parseGame, parseStudy, lines, weightedShuffle, alternatives };
})();
