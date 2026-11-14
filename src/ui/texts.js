/* ui/texts.js — the language machinery. The words themselves live in i18n/<code>.js,
   one file per language, each registered with Texts.add(). English is the default and
   the fallback for any key a language is missing.

   Usage: Texts.t('key', ...args). A value can be a string, a list (one item is picked
   at random) or a function of the args.

   Language and the child's gender ('m' boy / 'f' girl / 'n' doesn't matter) are
   per-player settings. pickG(base, boy, girl) adds the gendered lines to the neutral
   ones; with 'n' only the neutral lines are used.

   Nothing here tells the child what kind of puzzle it is — not the theme, not the
   book, not even "mate": the task is always "find the strongest line". */
const Texts = (function () {
  const LANGS = [];            // [{ code, name, flag, locale }] in registration order
  const D = {};                // code → dictionary
  const GENDERS = ['m', 'f', 'n'];
  let lang = 'en', gender = 'n';

  const pick = a => a[Math.floor(Math.random() * a.length)];
  const g = (m, f, n) => (gender === 'm' ? m : gender === 'f' ? f : n);
  /** A random line from the neutral list plus, for a boy or a girl, the gendered extras. */
  const pickG = (base, m, f) => pick(base.concat(g(m || [], f || [], [])));
  /** forms: en/el → [one, other]; ru → [one, few, many]. */
  function plural(n, forms) {
    if (forms.length === 3) {
      const a = Math.abs(n) % 100, b = a % 10;
      return a > 10 && a < 20 ? forms[2] : b === 1 ? forms[0] : b >= 2 && b <= 4 ? forms[1] : forms[2];
    }
    return Math.abs(n) === 1 ? forms[0] : forms[1];
  }
  const signed = n => (n > 0 ? '+' + n : n < 0 ? '−' + Math.abs(n) : '±0');

  /** Register a language: meta = { name, flag (svg), locale }, words = helpers → dictionary. */
  function add(code, meta, words) {
    if (!LANGS.some(l => l.code === code)) LANGS.push(Object.assign({ code }, meta));
    D[code] = words({ plural, pick, pickG, g });
  }
  const isLang = c => !!D[c];

  // Lists that are data, not "pick one at random".
  const KEEP = new Set(['pointsW', 'lessonsW', 'puzzlesW', 'avatars', 'pieceName', 'genders']);
  function t(key, ...args) {
    let v = D[lang] && D[lang][key];
    if (v === undefined) v = D.en && D.en[key];
    if (v === undefined) return key;
    if (typeof v === 'function') return v(...args);
    return Array.isArray(v) && !KEEP.has(key) ? pick(v) : v;
  }
  const word = (key, n) => plural(n, t(key));          // word('pointsW', 5) → "points"
  const points = n => `${n} ${word('pointsW', n)}`;

  /** Book title / spine text: books[id] in the dictionary is 'Title' or ['Title', 'Spine']. */
  function bookEntry(id) {
    const e = (D[lang] && D[lang].books && D[lang].books[id]) || (D.en && D.en.books && D.en.books[id]) || id;
    return Array.isArray(e) ? e : [e, e];
  }
  const bookTitle = vol => bookEntry(vol.id)[0];
  const bookShort = vol => bookEntry(vol.id)[1];

  /** First line of a puzzle: whose side + "find the best move". Says nothing about the puzzle itself. */
  const goal = (p, color) => `${t('side', color)} ${t('findBest')}`;

  const cat = {
    hello: (name, goalPts) => t('hello', name, goalPts),
    welcomeBack: name => t('welcomeBack', name),
    opponent: () => t('opponent'),
    correct: () => t('correct'),
    continueTurn: () => t('continueTurn'),
    wrong: left => t('wrong', left),
    guided: () => t('guided'), guideTurn: () => t('guideTurn'), guideWrong: () => t('guideWrong'),
    hint1: (piece, left) => t('hint1', piece, left), hint2: () => t('hint2'),
    /** After a puzzle: kind = 'clean' | 'mistakes' | 'shown'. */
    done: kind => t(kind === 'clean' ? 'doneClean' : kind === 'mistakes' ? 'doneMistakes' : 'doneShown'),
    replay: () => t('replay'), replayDone: () => t('replayDone'), lessonDone: () => t('lessonDone'),
  };

  return {
    add, LANGS, GENDERS, isLang, t, word, points, plural, pick, signed, goal, cat, bookTitle, bookShort,
    setLang: c => { lang = isLang(c) ? c : 'en'; },
    setGender: x => { gender = GENDERS.includes(x) ? x : 'n'; }, gender: () => gender,
    isGender: x => GENDERS.includes(x), genderName: x => t('genders')[x],
    lang: () => lang, locale: () => (LANGS.find(l => l.code === lang) || {}).locale || 'en-GB',
    pieceName: k => t('pieceName')[k], avName: i => t('avatars')[i] || '',
  };
})();
