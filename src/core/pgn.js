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
   Lines come in depth-first order: the main line first, then each other opponent
   reply, starting from the deepest branch. Each line knows where it parts from the
   previous one (from), so the next line starts right at that position. */
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

  /** The lines to learn, see the top of the file. Each: { path: [nodes], from: index of
      the first node that is new compared to the previous line, moves: indexes of the
      child's moves in path (only those at or after `from`) }. */
  function lines(root, player) {
    const raw = [];
    (function walk(node, path) {
      if (!node.children.length) { raw.push(path); return; }
      if (node.state.turn === player) walk(node.children[0], path.concat(node.children[0]));
      else for (const c of node.children) walk(c, path.concat(c));
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
      out.push({ path, from, moves });
      prev = path;
    }
    return out;
  }

  /** The other good moves at a node where the child is to move (all but the main one). */
  const alternatives = node => node.parent.children.filter(n => n !== node);

  return { san, moveFromSan, parseGame, parseStudy, lines, alternatives };
})();
