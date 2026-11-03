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

  /* After a successful puzzle the cat comments on one random tag of the puzzle
     (its length, who played it, the phase of the game, the motif...). */
  const TAG_PRAISE = {
    oneMove: ['Один ход — и готово!', 'Всего один точный ход. Мур!'],
    short: ['Два точных хода — отлично!', 'Короткая и точная комбинация!'],
    long: ['Длинная комбинация — и всё точно!', 'Три хода вперёд — настоящий расчёт!'],
    veryLong: ['Очень длинная комбинация — вот это расчёт!'],
    mateIn1: ['Мат в один ход — с первого взгляда!'],
    mateIn2: ['Мат в два хода — всё рассчитано!'],
    mateIn3: ['Мат в три хода! Это уже серьёзный расчёт.'],
    master: ['Эта позиция — из партии мастера. Решено!', 'Так играют мастера — и у тебя получилось!'],
    masterVsMaster: ['Позиция из партии двух мастеров — а решение у тебя!'],
    superGM: ['Это из партии гроссмейстера! Мур-р!'],
    opening: ['Ещё дебют, а уже выигрыш!'],
    middlegame: ['Фигур на доске много — а решение найдено!'],
    endgame: ['В эндшпиле важен каждый ход — всё точно!'],
    rookEndgame: ['Ладейный эндшпиль — самый частый в шахматах. Отлично!'],
    queenEndgame: ['Ферзевый эндшпиль — и точный ход!'],
    bishopEndgame: ['Слоновый эндшпиль — и всё по делу!'],
    queenRookEndgame: ['Ферзь и ладьи — и ничего не упущено!'],
    crushing: ['Решающий удар! Перевес огромный.'],
    advantage: ['Перевес твой! Так и выигрывают партии.'],
    backRankMate: ['Мат на последней горизонтали — красиво!', 'Король заперт своими пешками — мат!'],
    hangingPiece: ['Да, просто берём незащищённую фигуру!', 'Фигура стояла без защиты — бери, раз дают!'],
    fork: ['Вилка! Две цели одним ходом.'],
    trappedPiece: ['Фигуре некуда уйти — отличный улов!'],
    kingsideAttack: ['Атака на короля — и она удалась!'],
    queensideAttack: ['Атака на ферзевом фланге удалась!'],
    promotion: ['Пешка дошла до конца — новый ферзь!'],
    sacrifice: ['Жертва — и она оправдалась!'],
  };

  /* After mistakes or arrows the cat gives a tip on the book's own topic, so it is
     clear what to look for next time. Keys are book ids from data/puzzles.js. */
  const BOOK_TIPS = {
    'backrank': {
      mistakes: ['Получилось! В следующий раз сразу смотри на последнюю горизонталь.', 'Есть! Подсказка: король за своими пешками боится шаха по последней линии.'],
      shown: ['Запомни: король заперт своими пешками — ищи шах по последней горизонтали.', 'Смотри на последнюю горизонталь: король за пешками, и бежать ему некуда.'],
    },
    'hanging-endgame': {
      mistakes: ['Получилось! В эндшпиле фигур мало — проверь каждую: кто её защищает?', 'Есть! Перед ходом ищи фигуру соперника без защиты.'],
      shown: ['Запомни: эта фигура стояла без защиты. Её можно было просто взять.', 'Фигур мало — проверь каждую: если её никто не защищает, бери!'],
    },
    'hanging-middle': {
      mistakes: ['Получилось! Перед ходом проверь: какая фигура соперника без защиты?', 'Есть! Ищи фигуры, которые никто не защищает.'],
      shown: ['Запомни: эту фигуру никто не защищал — её можно было просто взять.', 'Фигур много — посмотри на каждую: кто её защищает? Если никто — бери!'],
    },
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
    else if (p.themes.includes('hangingPiece')) g = 'Найди, как выиграть фигуру!';
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
    /** After a puzzle. clean → about a random tag of the puzzle; mistakes / shown →
        a tip on the book's topic (falls back to the mate name or a generic line). */
    done: (kind, p) => {
      if (kind === 'clean') {
        const tags = p ? p.themes.filter(t => TAG_PRAISE[t]) : [];
        const head = pick(['Мур-р! ', 'Чисто! ', 'Без ошибок! ', '']);
        return tags.length ? head + pick(TAG_PRAISE[pick(tags)]) : 'Мур-р-р! Без единой ошибки!';
      }
      const B = p && BOOK_TIPS[p.vol];
      if (B && B[kind]) return pick(B[kind]);
      const m = p && mateName(p);
      if (m) return kind === 'mistakes' ? `Есть ${m}!` : `Вот так ставится ${m}. Запомни!`;
      return kind === 'mistakes' ? 'Получилось! Задача решена.' : 'Вот как надо. Запомни!';
    },
    replay: () => 'Смотри внимательно…',
    replayDone: () => 'Запомни этот приём — он ещё пригодится!',
    lessonDone: () => 'Урок пройден! Все очки собраны. Мур!',
  };
  const signed = n => (n > 0 ? '+' + n : n < 0 ? '−' + Math.abs(n) : '±0');

  return { plural, pick, points, puzzlesN, signed, PIECE, PROMO, themeTag, goal, describeMove, cat };
})();
