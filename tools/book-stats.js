/* tools/book-stats.js — what is actually inside a book: which piece makes the first
   move, how often it is a capture / check / quiet move, how long the lines are, the
   most common Lichess themes, and a few sample lines in short notation.
   Helps to name a new book and to see what the child will really be solving.
   Usage: node tools/book-stats.js [bookId] [samples]   (no id: a summary of every book) */
const { loadCore } = require('./load-core');
const ctx = loadCore();
const C = ctx.ChessCore;
const [only, nSamples = 12] = process.argv.slice(2);

const san = (s, m) => {
  const pt = C.typeOf(m.piece).toUpperCase();
  const st = C.status(C.make(s, m));
  return (pt === 'P' ? (m.captured ? C.sqName(m.from)[0] : '') : pt) + (m.captured ? 'x' : '') + C.sqName(m.to)
    + (m.promo ? '=' + m.promo.toUpperCase() : '') + (st === 'mate' ? '#' : st === 'check' ? '+' : '');
};
const pct = (a, n) => Math.round(a / n * 100) + '%';

for (const v of ctx.PuzzleSource.getVolumes()) {
  if (only && v.id !== only) continue;
  const s = { first: {}, cap: 0, check: 0, mate: 0, quiet: 0, len: {}, themes: {}, oppCheck: 0, takesMoved: 0 };
  const samples = [];
  for (const p of v.puzzles) {
    let st = C.parseFEN(p.fen);
    const m0 = C.findMove(st, p.moves[0]); const line = ['(' + san(st, m0) + ')']; st = C.make(st, m0);
    if (C.inCheck(st)) s.oppCheck++;
    const m1 = C.findMove(st, p.moves[1]);
    if (m1.captured && m1.to === m0.to) s.takesMoved++;
    const pt = C.typeOf(m1.piece); s.first[pt] = (s.first[pt] || 0) + 1;
    const after = C.status(C.make(st, m1));
    if (m1.captured) s.cap++; if (after === 'check') s.check++; if (after === 'mate') s.mate++;
    if (!m1.captured && after !== 'check' && after !== 'mate') s.quiet++;
    const L = p.moves.length / 2; s.len[L] = (s.len[L] || 0) + 1;
    for (const t of p.themes) s.themes[t] = (s.themes[t] || 0) + 1;
    let x = st; for (let i = 1; i < p.moves.length; i++) { const mm = C.findMove(x, p.moves[i]); line.push(san(x, mm)); x = C.make(x, mm); }
    samples.push(`${p.rating} ${line.join(' ')}`);
  }
  const n = v.puzzles.length;
  const rs = v.puzzles.map(p => p.rating);
  console.log(`\n== ${v.id}: ${n} puzzles, rating ${Math.min(...rs)}–${Math.max(...rs)}`);
  console.log(`  first move by: ${Object.entries(s.first).sort((a, b) => b[1] - a[1]).map(([k, c]) => `${k.toUpperCase()} ${pct(c, n)}`).join(', ')}`);
  console.log(`  first move: capture ${pct(s.cap, n)}, check ${pct(s.check, n)}, mate ${pct(s.mate, n)}, quiet ${pct(s.quiet, n)}`);
  console.log(`  opponent's move gave check ${pct(s.oppCheck, n)}; first move takes the piece that just moved ${pct(s.takesMoved, n)}`);
  console.log(`  length in moves: ${Object.entries(s.len).map(([k, c]) => `${k}: ${c}`).join(', ')}`);
  console.log(`  themes: ${Object.entries(s.themes).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, c]) => `${k} ${c}`).join(', ')}`);
  if (only) { const k = +nSamples; for (let i = 0; i < k; i++) console.log('   ', samples[Math.floor(i * n / k)]); }
}
