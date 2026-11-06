/* config.js — all hardcoded settings live here. */
const CONFIG = {
  appName: 'Учёный Кот-Шахматист',

  // Tries per puzzle. Mistakes 1..(tries-1) are forgiven (1 point); the last one
  // turns on arrows: the child plays the correct line along them and gets 0 points.
  triesBeforeAnswer: 3,

  // Points for one puzzle: clean solve / solved with mistakes / played along the arrows.
  points: { clean: 2, withMistakes: 1, shown: 0 },

  // One lesson = collect this many points, then the next lesson starts. Endless.
  lessonGoal: 40,

  // Elo rating. A clean solve is a win against the puzzle's Lichess rating,
  // anything else is a loss. k = 20 gives ±10 against a puzzle of equal rating.
  rating: { start: 100, k: 20, floor: 0 },

  // Puzzle picking inside a volume (core/puzzle-source.js):
  // don't repeat any of the last N puzzles while there is a choice.
  avoidRecent: 15,
  // Rating window for picking: puzzles rated within [x + low, x + high] (x = player's
  // rating) are picked most often; each `step` further out halves the chance;
  // more than maxSteps steps out → not picked at all.
  // Now: target x-200..x; x-400..x-200 and x..x+200 → ½; x-600..x-400 and x+200..x+400 → ¼.
  ratingWindow: { low: -200, high: 0, step: 200, maxSteps: 2 },

  // Pause after a wrong move: the board greys out and an hourglass counts down,
  // so the child thinks instead of clicking again. k-th mistake → k × pauseSec seconds.
  // No pause after the last mistake (arrows come instead). Default per player;
  // each player can change it in their profile (pauseOptions are the choices).
  mistakePauseSec: 3,
  pauseOptions: [0, 2, 3, 5, 10],

  soundOnByDefault: true,
  storageKey: 'chesswisecat.v1',
  legacyStorageKeys: ['shakhmatyata.v2'],   // names and avatars are carried over from these
};
