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

  soundOnByDefault: true,
  storageKey: 'chesswisecat.v1',
  legacyStorageKeys: ['shakhmatyata.v2'],   // names and avatars are carried over from these
};
