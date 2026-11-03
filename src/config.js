/* config.js — all hardcoded settings live here. */
const CONFIG = {
  // How many puzzles go into one pack when packs are built from the flat list.
  packSize: 20,
  // Wrong moves allowed before the correct solution is shown.
  triesBeforeAnswer: 3,
  // Points per star; harder puzzles (higher Lichess rating) give more.
  pointsPerStar: rating => Math.max(10, Math.round(rating / 50)),
  // Replaying a puzzle that was already solved earns this share of points.
  replayFactor: 0.5,
  // Bonus for consecutive solves without seeing the answer.
  streakBonus: streak => (streak >= 2 ? Math.min(20, 5 * (streak - 1)) : 0),
  // Endless levels: points needed to go from level n to n + 1.
  levelNeed: n => 300 + 150 * (n - 1),
  levelTitles: ['Котёнок', 'Ученик', 'Знаток', 'Мастер', 'Профессор', 'Академик'],
  soundOnByDefault: true,
  storageKey: 'shakhmatyata.v2',
};
