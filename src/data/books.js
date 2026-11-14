/* data/books.js — the books on the shelf, in shelf order.
   id: stable (progress is kept per puzzle; the id names the book in the history and in
   i18n/*.js → books). color: the book's colour on the shelf.
   Each book's puzzles live in data/books/<id>.js as one Lichess CSV pasted as is:
       PUZZLE_CSV['<id>'] = `PuzzleId,FEN,Moves,Rating,...`;
   To add a book: put its file in data/books/, add a line here, add its title to every
   i18n/*.js file (books section). tests/books.js checks that every book has both. */
const PUZZLE_CSV = {};
const BOOKS = [
  // Red — up to 600
  { id: 'hanging-endgame', color: '#D32F2F' },   // task_hanging600_endgame.csv — hanging pieces in the endgame, rating up to 600
  { id: 'hanging-middle', color: '#B71C1C' },   // task_hanging600_middle.csv — hanging pieces in the opening / middlegame, rating up to 600
  { id: 'advanced-pawn', color: '#E53935' },   // task_advanced600.csv — advanced / passed pawn, rating up to 600
  { id: 'fork', color: '#A52424' },   // task_fork600.csv — forks, rating up to 600
  { id: 'discovered', color: '#C62828' },   // task_discovered600.csv — discovered attacks, rating up to 600
  { id: 'kingside', color: '#DB3A34' },   // task_kingside600.csv — kingside attack, rating up to 600
  { id: 'middlegame', color: '#8E1B1B' },   // task_middlegame600.csv — middlegame tactics, rating up to 600
  { id: 'king-mate', color: '#CC2E3A' },   // task_kingmate600.csv — mates on the kingside, rating up to 600
  { id: 'opening-mate', color: '#B83227' },   // task_kingopeningmate600.csv — mates in the opening, rating up to 600
  { id: 'long-mate', color: '#E0403A' },   // task_longmate600.csv — long mates (mostly in 3), rating up to 600
  // Orange — up to 800
  { id: 'hanging-opening', color: '#FF8C1A' },   // task_hangingopening800.csv, rating up to 800
  { id: 'pin', color: '#F57C00' },   // task_middlegamepin800.csv, rating up to 800
  { id: 'skewer', color: '#FFA040' },   // task_middlegameskewer800.csv, rating up to 800
  { id: 'opening', color: '#E8740C' },   // task_opening800.csv, rating up to 800
  { id: 'queen-mate', color: '#FF9A3C' },   // task_queenmate800.csv, rating up to 800
  // Yellow — up to 900
  { id: 'endgame-control', color: '#FFD60A' },   // task_defensive900.csv, rating up to 900
  { id: 'deflection', color: '#F2C200' },   // task_deflection900.csv, rating up to 900
  { id: 'long-combo', color: '#FFE45C' },   // task_long900.csv, rating up to 900
  { id: 'capture-defender', color: '#FFCC1A' },   // task_antidefender900.csv, rating up to 900
  { id: 'hanging-fork', color: '#E6B800' },   // task_hangingfork900.csv, rating up to 900
  // Green — up to 1000
  { id: 'defensive-middle', color: '#2E7D32' },   // task_defensivemiddle1000.csv, rating up to 1000
  { id: 'discovered-check', color: '#1B5E20' },   // task_discoveredCheck1000.csv, rating up to 1000
  { id: 'endgame-plan', color: '#3A8F40' },   // task_endgamequite1000.csv, rating up to 1000
  { id: 'pillsbury', color: '#43A047' },
  { id: 'weak-king', color: '#2E6B30' },
  // Light blue — up to 1100
  { id: 'intermezzo', color: '#29B6F6' },
  { id: 'zugzwang', color: '#4FC3F7' },
  { id: 'trapped', color: '#03A9F4' },
  { id: 'kingside-opening', color: '#0BA5E0' },
  { id: 'smothered', color: '#6CCBF5' },
  // Blue — up to 1200
  { id: 'xray', color: '#1A3A8F' },
  { id: 'interference', color: '#283593' },
];

// Each book's file is loaded right after this one, in shelf order (the artifact build
// inlines them instead and sets BOOKS_INLINED). So a new book is one line above + its file.
if (!window.BOOKS_INLINED) {
  const v = typeof VERSION === 'string' ? VERSION : '';
  for (const b of BOOKS) document.write(`<script src="src/data/books/${b.id}.js?v=${v}"><\/script>`);
}
