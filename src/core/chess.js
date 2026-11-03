/* core/chess.js — chess rules only: FEN, legal moves, make move, check/mate. No DOM. */
const ChessCore = (function () {
  const FILES = 'abcdefgh';
  const KN = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
  const KG = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const DIAG = [[-1,-1],[-1,1],[1,-1],[1,1]];
  const ORTH = [[-1,0],[1,0],[0,-1],[0,1]];

  const sqName = i => FILES[i & 7] + (8 - (i >> 3));
  const sqIdx = s => (8 - (s.charCodeAt(1) - 48)) * 8 + (s.charCodeAt(0) - 97);
  const colorOf = p => (p ? (p < 'a' ? 'w' : 'b') : null);
  const typeOf = p => (p ? p.toLowerCase() : null);
  const other = c => (c === 'w' ? 'b' : 'w');

  function parseFEN(fen) {
    const parts = String(fen).trim().split(/\s+/);
    if (parts.length < 2) throw new Error('FEN: not enough fields');
    const rows = parts[0].split('/');
    if (rows.length !== 8) throw new Error('FEN: need 8 ranks');
    const board = new Array(64).fill(null);
    for (let r = 0; r < 8; r++) {
      let f = 0;
      for (const ch of rows[r]) {
        if (ch >= '1' && ch <= '8') f += +ch;
        else if ('pnbrqkPNBRQK'.includes(ch)) {
          if (f > 7) throw new Error('FEN: rank too wide');
          board[r * 8 + f] = ch; f++;
        } else throw new Error('FEN: bad char ' + ch);
      }
      if (f !== 8) throw new Error('FEN: rank width');
    }
    if (board.filter(p => p === 'K').length !== 1 || board.filter(p => p === 'k').length !== 1)
      throw new Error('FEN: kings');
    const turn = parts[1] === 'b' ? 'b' : 'w';
    let castling = parts[2] && parts[2] !== '-' ? parts[2].replace(/[^KQkq]/g, '') : '';
    // drop castling rights that the board contradicts
    if (board[60] !== 'K') castling = castling.replace(/[KQ]/g, '');
    if (board[4] !== 'k') castling = castling.replace(/[kq]/g, '');
    if (board[63] !== 'R') castling = castling.replace('K', '');
    if (board[56] !== 'R') castling = castling.replace('Q', '');
    if (board[7] !== 'r') castling = castling.replace('k', '');
    if (board[0] !== 'r') castling = castling.replace('q', '');
    const ep = parts[3] && /^[a-h][36]$/.test(parts[3]) ? sqIdx(parts[3]) : -1;
    return { board, turn, castling, ep, half: parseInt(parts[4], 10) || 0, full: parseInt(parts[5], 10) || 1 };
  }

  function toFEN(s) {
    let out = '';
    for (let r = 0; r < 8; r++) {
      let empty = 0;
      for (let f = 0; f < 8; f++) {
        const p = s.board[r * 8 + f];
        if (!p) empty++;
        else { if (empty) { out += empty; empty = 0; } out += p; }
      }
      if (empty) out += empty;
      if (r < 7) out += '/';
    }
    return `${out} ${s.turn} ${s.castling || '-'} ${s.ep >= 0 ? sqName(s.ep) : '-'} ${s.half} ${s.full}`;
  }

  function attacked(board, sq, by) {
    const r = sq >> 3, f = sq & 7, w = by === 'w';
    const pr = w ? r + 1 : r - 1;
    if (pr >= 0 && pr < 8) {
      const P = w ? 'P' : 'p';
      if (f > 0 && board[pr * 8 + f - 1] === P) return true;
      if (f < 7 && board[pr * 8 + f + 1] === P) return true;
    }
    const N = w ? 'N' : 'n', K = w ? 'K' : 'k', B = w ? 'B' : 'b', R = w ? 'R' : 'r', Q = w ? 'Q' : 'q';
    for (const [dr, df] of KN) {
      const rr = r + dr, ff = f + df;
      if (rr >= 0 && rr < 8 && ff >= 0 && ff < 8 && board[rr * 8 + ff] === N) return true;
    }
    for (const [dr, df] of KG) {
      const rr = r + dr, ff = f + df;
      if (rr >= 0 && rr < 8 && ff >= 0 && ff < 8 && board[rr * 8 + ff] === K) return true;
    }
    for (const [dr, df] of DIAG) {
      let rr = r + dr, ff = f + df;
      while (rr >= 0 && rr < 8 && ff >= 0 && ff < 8) {
        const p = board[rr * 8 + ff];
        if (p) { if (p === B || p === Q) return true; break; }
        rr += dr; ff += df;
      }
    }
    for (const [dr, df] of ORTH) {
      let rr = r + dr, ff = f + df;
      while (rr >= 0 && rr < 8 && ff >= 0 && ff < 8) {
        const p = board[rr * 8 + ff];
        if (p) { if (p === R || p === Q) return true; break; }
        rr += dr; ff += df;
      }
    }
    return false;
  }

  const kingSq = (board, c) => board.indexOf(c === 'w' ? 'K' : 'k');

  function pseudo(s) {
    const moves = [], b = s.board, us = s.turn, them = other(us);
    for (let i = 0; i < 64; i++) {
      const p = b[i];
      if (!p || colorOf(p) !== us) continue;
      const t = typeOf(p), r = i >> 3, f = i & 7;
      if (t === 'p') {
        const dir = us === 'w' ? -1 : 1, start = us === 'w' ? 6 : 1, last = us === 'w' ? 0 : 7;
        const r1 = r + dir;
        if (r1 < 0 || r1 > 7) continue;
        const add = (to, cap, flag) => {
          if ((to >> 3) === last) for (const pr of ['q', 'r', 'b', 'n']) moves.push({ from: i, to, piece: p, captured: cap, promo: pr });
          else moves.push({ from: i, to, piece: p, captured: cap, flag });
        };
        const one = r1 * 8 + f;
        if (!b[one]) {
          add(one, null);
          const two = (r + 2 * dir) * 8 + f;
          if (r === start && !b[two]) moves.push({ from: i, to: two, piece: p, captured: null, flag: 'd' });
        }
        for (const df of [-1, 1]) {
          const ff = f + df;
          if (ff < 0 || ff > 7) continue;
          const to = r1 * 8 + ff, q = b[to];
          if (q && colorOf(q) === them) add(to, q);
          else if (to === s.ep && !q) moves.push({ from: i, to, piece: p, captured: us === 'w' ? 'p' : 'P', flag: 'e' });
        }
      } else if (t === 'n' || t === 'k') {
        for (const [dr, df] of t === 'n' ? KN : KG) {
          const rr = r + dr, ff = f + df;
          if (rr < 0 || rr > 7 || ff < 0 || ff > 7) continue;
          const to = rr * 8 + ff, q = b[to];
          if (!q || colorOf(q) === them) moves.push({ from: i, to, piece: p, captured: q || null });
        }
        if (t === 'k') {
          const home = us === 'w' ? 60 : 4;
          if (i === home && !attacked(b, home, them)) {
            const R = us === 'w' ? 'R' : 'r';
            const kSide = us === 'w' ? 'K' : 'k', qSide = us === 'w' ? 'Q' : 'q';
            if (s.castling.includes(kSide) && !b[home + 1] && !b[home + 2] && b[home + 3] === R &&
                !attacked(b, home + 1, them) && !attacked(b, home + 2, them))
              moves.push({ from: i, to: home + 2, piece: p, captured: null, flag: 'k' });
            if (s.castling.includes(qSide) && !b[home - 1] && !b[home - 2] && !b[home - 3] && b[home - 4] === R &&
                !attacked(b, home - 1, them) && !attacked(b, home - 2, them))
              moves.push({ from: i, to: home - 2, piece: p, captured: null, flag: 'q' });
          }
        }
      } else {
        const dirs = t === 'b' ? DIAG : t === 'r' ? ORTH : DIAG.concat(ORTH);
        for (const [dr, df] of dirs) {
          let rr = r + dr, ff = f + df;
          while (rr >= 0 && rr < 8 && ff >= 0 && ff < 8) {
            const to = rr * 8 + ff, q = b[to];
            if (!q) moves.push({ from: i, to, piece: p, captured: null });
            else { if (colorOf(q) === them) moves.push({ from: i, to, piece: p, captured: q }); break; }
            rr += dr; ff += df;
          }
        }
      }
    }
    return moves;
  }

  function make(s, m) {
    const b = s.board.slice(), us = s.turn, p = b[m.from];
    b[m.from] = null;
    if (m.flag === 'e') b[(m.from & ~7) | (m.to & 7)] = null;
    b[m.to] = m.promo ? (us === 'w' ? m.promo.toUpperCase() : m.promo) : p;
    if (m.flag === 'k') { b[m.to - 1] = b[m.to + 1]; b[m.to + 1] = null; }
    if (m.flag === 'q') { b[m.to + 1] = b[m.to - 2]; b[m.to - 2] = null; }
    let c = s.castling;
    if (p === 'K') c = c.replace(/[KQ]/g, '');
    if (p === 'k') c = c.replace(/[kq]/g, '');
    for (const sq of [m.from, m.to]) {
      if (sq === 63) c = c.replace('K', '');
      if (sq === 56) c = c.replace('Q', '');
      if (sq === 7) c = c.replace('k', '');
      if (sq === 0) c = c.replace('q', '');
    }
    return {
      board: b, turn: other(us), castling: c,
      ep: m.flag === 'd' ? (m.from + m.to) / 2 : -1,
      half: typeOf(p) === 'p' || m.captured ? 0 : s.half + 1,
      full: s.full + (us === 'b' ? 1 : 0),
    };
  }

  function legal(s) {
    const us = s.turn, them = other(us);
    return pseudo(s).filter(m => {
      const n = make(s, m);
      return !attacked(n.board, kingSq(n.board, us), them);
    });
  }

  const inCheck = s => attacked(s.board, kingSq(s.board, s.turn), other(s.turn));
  const uci = m => sqName(m.from) + sqName(m.to) + (m.promo || '');

  function findMove(s, str) {
    str = String(str || '').trim().toLowerCase();
    if (!/^[a-h][1-8][a-h][1-8][qrbn]?$/.test(str)) return null;
    const from = sqIdx(str.slice(0, 2)), to = sqIdx(str.slice(2, 4)), promo = str[4] || null;
    const cands = legal(s).filter(m => m.from === from && m.to === to);
    if (!cands.length) return null;
    return cands.find(m => (m.promo || null) === promo) || cands.find(m => m.promo === 'q') || cands[0];
  }

  function status(s) {
    const n = legal(s).length;
    if (n) return inCheck(s) ? 'check' : 'ok';
    return inCheck(s) ? 'mate' : 'stalemate';
  }

  return { parseFEN, toFEN, legal, make, inCheck, status, uci, findMove, sqName, sqIdx, colorOf, typeOf, other, attacked, kingSq };
})();
if (typeof module !== 'undefined') module.exports = ChessCore;
