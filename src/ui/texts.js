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
    backRankMate: 'мат на последней линии', smotheredMate: 'спёртый мат', promotion: 'превращение пешки',
    sacrifice: 'жертва', discoveredAttack: 'вскрытое нападение', doubleCheck: 'двойной шах', deflection: 'отвлечение',
    attraction: 'завлечение', trappedPiece: 'пойманная фигура', capturingDefender: 'уничтожение защитника',
    xRayAttack: 'рентген', intermezzo: 'промежуточный ход', quietMove: 'тихий ход', clearance: 'освобождение поля',
    interference: 'перекрытие', anastasiaMate: 'мат Анастасии', arabianMate: 'арабский мат', hookMate: 'мат крюком',
    bodenMate: 'мат Бодена', dovetailMate: 'мат «ласточкин хвост»', doubleBishopMate: 'мат двумя слонами',
  };

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
    hello: name => `Мур! Я Учёный Котик. ${name}, решаем задачи — одну за другой. Нажимай «Решать»!`,
    welcomeBack: name => pick([`С возвращением, ${name}! Продолжим?`, `${name}, мур! Новая задача уже ждёт.`, `Мяу, ${name}! Задачи уже ждут.`]),
    allDone: name => `${name}, все пакеты пройдены! Пока я готовлю новые, давай добудем недостающие звёзды.`,
    opponent: (i, n) => `Задача ${i} из ${n}. Смотри, как ходит соперник…`,
    correct: () => pick(['Верно! 👍', 'Так держать!', 'Правильно!', 'Отличный ход!']) + ' Теперь отвечает соперник…',
    continueTurn: () => 'Твой ход! Что дальше?',
    wrong: left => pick(['Не тот ход — попробуй ещё!', 'Почти! Подумай ещё разок.', 'Хм, есть ход сильнее. Ищи!', 'Посмотри внимательнее на все фигуры.']) + (left === 1 ? ' Осталась одна попытка.' : ''),
    outOfTries: () => 'Ой! Попытки закончились.',
    solution: () => 'Ничего страшного! Смотри, как надо 👀',
    solutionDone: () => 'Запомни этот приём — он ещё пригодится!',
    replay: () => 'Смотри внимательно…',
    hint1: piece => `Подсказка: ходи ${PIECE_ACC[piece]}. 👆`,
    hint2: () => 'Вот сюда! Сделай этот ход.',
    solved: stars => (stars === 3 ? 'Мур-р-р! Без единой ошибки!' : stars === 2 ? 'Отлично! Задача решена!' : 'Получилось! В следующий раз — ещё лучше.'),
  };

  return { plural, pick, points, puzzlesN, PIECE, PROMO, themeTag, goal, describeMove, cat };
})();
