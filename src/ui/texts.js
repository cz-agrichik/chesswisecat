/* ui/texts.js — every word the child reads, in one place. */
const Texts = (function () {
  const plural = (n, one, few, many) => { const a = Math.abs(n) % 100, b = a % 10; return (a > 10 && a < 20) ? many : b === 1 ? one : (b >= 2 && b <= 4) ? few : many; };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const points = n => `${n} ${plural(n, 'очко', 'очка', 'очков')}`;
  const puzzlesN = n => `${n} ${plural(n, 'задача', 'задачи', 'задач')}`;

  const PIECE = { p: 'Пешка', n: 'Конь', b: 'Слон', r: 'Ладья', q: 'Ферзь', k: 'Король' };
  const PIECE_ACC = { p: 'пешкой', n: 'конём', b: 'слоном', r: 'ладьёй', q: 'ферзём', k: 'королём' };
  const PROMO = { q: 'ферзя', r: 'ладью', b: 'слона', n: 'коня' };
  const THEMES = {
    fork: 'вилка', skewer: 'линейный удар', pin: 'связка', hangingPiece: 'незащищённая фигура',
    backRankMate: 'мат на последней горизонтали', smotheredMate: 'спёртый мат', promotion: 'превращение пешки',
    sacrifice: 'жертва', discoveredAttack: 'вскрытое нападение', doubleCheck: 'двойной шах', deflection: 'отвлечение',
    attraction: 'завлечение', trappedPiece: 'пойманная фигура', capturingDefender: 'уничтожение защитника',
    xRayAttack: 'рентген', intermezzo: 'промежуточный ход', quietMove: 'тихий ход', clearance: 'освобождение поля',
    interference: 'перекрытие', anastasiaMate: 'мат Анастасии', arabianMate: 'арабский мат', hookMate: 'мат крюком',
    bodenMate: 'мат Бодена', dovetailMate: 'мат «ласточкин хвост»', doubleBishopMate: 'мат двумя слонами',
  };

  // Mate patterns as a noun phrase (nominative, masculine) for the cat's praise.
  const MATE_NAMES = {
    backRankMate: 'мат на последней горизонтали', smotheredMate: 'спёртый мат', anastasiaMate: 'мат Анастасии',
    arabianMate: 'арабский мат', hookMate: 'мат крюком', bodenMate: 'мат Бодена', dovetailMate: 'мат «ласточкин хвост»',
    doubleBishopMate: 'мат двумя слонами', mate: 'мат',
  };
  const mateName = p => { const k = Object.keys(MATE_NAMES).find(t => p.themes.includes(t)); return k ? MATE_NAMES[k] : null; };

  const MATE_FIRST = ['backRankMate', 'smotheredMate', 'anastasiaMate', 'arabianMate', 'hookMate', 'bodenMate', 'dovetailMate', 'doubleBishopMate'];
  function themeTag(p) {
    const k = MATE_FIRST.concat(Object.keys(THEMES)).find(t => p.themes.includes(t));
    return k ? THEMES[k] : null;
  }
  function goal(p, color) {
    const side = color === 'w' ? 'белых' : 'чёрных';
    const mm = p.themes.find(t => /^mateIn\d$/.test(t));
    let g = 'Найди самый сильный ход!';
    if (mm) { const n = +mm.slice(6); g = `Поставь мат в ${n} ${plural(n, 'ход', 'хода', 'ходов')}!`; }
    else if (p.themes.includes('mate')) g = 'Поставь мат!';
    return `Ты играешь за ${side}. ${g}`;
  }
  function describeMove(state, m) {
    if (m.flag === 'k') return 'Рокировка в короткую сторону';
    if (m.flag === 'q') return 'Рокировка в длинную сторону';
    let t = PIECE[ChessCore.typeOf(m.piece)] + (m.captured ? ' бьёт на ' : ' идёт на ') + ChessCore.sqName(m.to);
    if (m.promo) t += ' и превращается в ' + PROMO[m.promo];
    const st = ChessCore.status(ChessCore.make(state, m));
    if (st === 'mate') t += ' — мат!'; else if (st === 'check') t += ' — шах!';
    return t;
  }

  const cat = {
    hello: (name, goal) => `Мур! Я Учёный Кот-Шахматист. ${name}, в каждом уроке собираем ${goal} очков. Нажимай «Решать»!`,
    welcomeBack: name => pick([`С возвращением, ${name}! Продолжим урок?`, `${name}, мур! Новая задача уже ждёт.`, `Мяу, ${name}! Задачи уже ждут.`]),
    lessonGo: (num, left) => `Урок ${num}! До конца урока — ${points(left)}.`,
    opponent: () => 'Смотри, как ходит соперник…',
    correct: () => pick(['Верно! 👍', 'Так держать!', 'Правильно!', 'Отличный ход!']) + ' Теперь отвечает соперник…',
    continueTurn: () => 'Твой ход! Что дальше?',
    wrong: left => pick(['Не тот ход — попробуй ещё!', 'Почти! Подумай ещё разок.', 'Хм, есть ход сильнее. Ищи!', 'Посмотри внимательнее на все фигуры.']) + (left === 1 ? ' Осталась последняя попытка.' : ''),
    guided: () => 'Попытки закончились. Ничего страшного — ходи по зелёным стрелочкам!',
    guideTurn: () => 'Сделай ход по стрелочке 👉',
    guideWrong: () => 'Не туда! Ходи по зелёной стрелочке.',
    hint1: (piece, left) => `Подсказка: ходи ${PIECE_ACC[piece]}. 👆` + (left === 1 ? ' Осталась последняя попытка.' : ''),
    hint2: () => 'Вот сюда! Сделай этот ход.',
    /** Praise after a puzzle; names the pattern when it is a known mate. */
    done: (kind, p) => {
      const m = p && mateName(p), tag = p && themeTag(p);
      if (m) return kind === 'clean' ? pick([`Мур-р! Отличный ${m}!`, `Чистый ${m}! Мур!`])
        : kind === 'mistakes' ? pick([`Есть ${m}!`, `Получилось: ${m}!`])
        : `Вот так ставится ${m}. Запомни!`;
      const extra = tag ? ` Приём: ${tag}.` : '';
      return (kind === 'clean' ? 'Мур-р-р! Без единой ошибки!' : kind === 'mistakes' ? 'Получилось! Задача решена.' : 'Вот как надо. Запомни!') + extra;
    },
    replay: () => 'Смотри внимательно…',
    replayDone: () => 'Запомни этот приём — он ещё пригодится!',
    lessonDone: () => 'Урок пройден! Все очки собраны. Мур!',
  };
  const signed = n => (n > 0 ? '+' + n : n < 0 ? '−' + Math.abs(n) : '±0');

  return { plural, pick, points, puzzlesN, signed, PIECE, PROMO, themeTag, goal, describeMove, cat };
})();
