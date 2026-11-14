/* app/players.js — choosing, creating, editing and deleting players. Settings per
   player: name, avatar, language, gender, pause after a mistake. */
(function () {
  const { h, esc } = UI;
  const T = Texts;

  function playersScreen() {
    const S = Progress.state;
    const el = h('<section class="page"><h1></h1><div class="pgrid"></div></section>');
    el.querySelector('h1').textContent = T.t(S.players.length ? 'whoSolves' : 'helloName');
    const grid = el.querySelector('.pgrid');
    for (const p of S.players) {
      const card = h(`<div class="pcard-wrap"><button class="pcard ${p.id === S.currentId ? 'on' : ''}"><span class="av">${p.avatar}</span><b></b><small>🏅 ${p.rating}</small></button><button class="pedit">✏️</button></div>`);
      card.querySelector('b').textContent = p.name;
      card.querySelector('.pedit').setAttribute('aria-label', T.t('editOf', p.name));
      card.querySelector('.pcard').onclick = () => { Progress.setCurrent(p.id); App.go('home'); };
      card.querySelector('.pedit').onclick = () => playerModal(p);
      grid.append(card);
    }
    const add = h(`<button class="pcard add"><span class="plus">+</span><b>${esc(T.t('newPlayer'))}</b></button>`);
    add.onclick = () => playerModal(null); grid.append(add);
    if (!S.players.length) setTimeout(() => playerModal(null), 60);
    return el;
  }

  /** Create (p = null) or edit a player. Changing the language redraws the form in
      that language straight away; closing without saving goes back to the player's own. */
  function playerModal(p, draft) {
    const d = draft || { name: p ? p.name : '', av: p ? Progress.AVATARS.indexOf(p.avatar) : 0, ps: App.pauseSecOf(p), lang: p ? p.lang : T.lang(), gender: p ? p.gender : 'n' };
    T.setLang(d.lang); T.setGender(d.gender);
    const el = h(`<form autocomplete="off"><h2>${esc(T.t(p ? 'editPlayer' : 'newPlayer'))}</h2>
      <p class="field" style="margin:0">${esc(T.t('language'))}</p>
      <div class="seg lang" role="radiogroup" aria-label="${esc(T.t('language'))}">${T.LANGS.map(l => `<button type="button" class="segb" data-l="${l.code}" role="radio"><span class="flag">${l.flag}</span>${l.name}</button>`).join('')}</div>
      <p class="field" style="margin:0">${esc(T.t('genderQ'))}</p>
      <div class="seg gen" role="radiogroup" aria-label="${esc(T.t('genderQ'))}">${T.GENDERS.map(x => `<button type="button" class="segb" data-g="${x}" role="radio">${{ m: '👦', f: '👧', n: '🙂' }[x]} ${esc(T.genderName(x))}</button>`).join('')}</div>
      <label class="field">${esc(T.t('name'))}<input name="nm" maxlength="${Progress.NAME_MAX}" placeholder="${esc(T.t('namePh'))}" enterkeyhint="done"></label>
      <p class="field" style="margin:0">${esc(T.t('whoAreYou'))}</p>
      <div class="avs">${Progress.AVATARS.map((a, i) => `<button type="button" class="avb ${i === d.av ? 'on' : ''}" data-i="${i}" aria-label="${esc(T.avName(i))}">${a}</button>`).join('')}</div>
      <p class="field" style="margin:0">${esc(T.t('pauseLabel'))}</p>
      <div class="seg ps" role="radiogroup" aria-label="${esc(T.t('pauseLabel'))}">${CONFIG.pauseOptions.map(s => `<button type="button" class="segb" data-s="${s}" role="radio">${esc(s ? T.t('sec', s) : T.t('none'))}</button>`).join('')}</div>
      <button class="btn wide" type="submit">${esc(T.t(p ? 'save' : 'done'))}</button>
      ${p ? `<button type="button" class="linkbtn danger" data-del>🗑 ${esc(T.t('delPlayer'))}</button>` : ''}</form>`);
    const mark = (sel, attr, val) => el.querySelectorAll(sel).forEach(x => { const on = x.dataset[attr] === String(val); x.classList.toggle('on', on); x.setAttribute('aria-checked', on); });
    mark('.ps .segb', 's', d.ps); mark('.lang .segb', 'l', d.lang); mark('.gen .segb', 'g', d.gender);
    el.querySelectorAll('.gen .segb').forEach(b => b.onclick = () => { d.gender = b.dataset.g; T.setGender(d.gender); mark('.gen .segb', 'g', d.gender); });
    el.querySelectorAll('.ps .segb').forEach(b => b.onclick = () => { d.ps = +b.dataset.s; mark('.ps .segb', 's', d.ps); });
    el.nm.value = d.name;
    el.nm.oninput = () => { d.name = el.nm.value; };
    el.querySelectorAll('.avb').forEach(b => b.onclick = () => { d.av = +b.dataset.i; el.querySelectorAll('.avb').forEach(x => x.classList.toggle('on', x === b)); });
    const close = UI.modal(el, () => App.render());
    el.querySelectorAll('.lang .segb').forEach(b => b.onclick = () => {
      if (b.dataset.l === d.lang) return;
      d.lang = b.dataset.l; close(true); playerModal(p, d);
    });
    const del = el.querySelector('[data-del]');
    if (del) del.onclick = () => { close(true); deleteModal(p); };
    el.onsubmit = e => {
      e.preventDefault();
      if (p) { Progress.updatePlayer(p.id, { name: d.name, avatarIdx: d.av, pauseSec: d.ps, lang: d.lang, gender: d.gender }); close(true); App.render(); }
      else { Progress.addPlayer(d.name, d.av, d.ps, d.lang, d.gender); close(true); App.go('home'); }
    };
  }

  /** Deleting a player: shows what will be lost and asks to type the name first,
      so a child can't wipe a profile by tapping around. */
  function deleteModal(p) {
    App.applyLang();   // the grown-up's current language, not the one being previewed
    const el = h(`<form autocomplete="off"><h2></h2><p class="delwarn"></p>
      <label class="field"><span></span><input name="nm" autocomplete="off" spellcheck="false"></label>
      <div class="row2"><button type="button" class="btn ghost" data-no>${esc(T.t('cancel'))}</button><button type="submit" class="btn danger" disabled>${esc(T.t('delYes'))}</button></div></form>`);
    el.querySelector('h2').textContent = T.t('delTitle', p.name);
    el.querySelector('.delwarn').textContent = T.t('delWarn', p.rating, p.played);
    el.querySelector('.field span').textContent = T.t('delType', p.name);
    const norm = x => String(x || '').trim().toLocaleLowerCase();
    const yes = el.querySelector('[type=submit]');
    el.nm.oninput = () => { yes.disabled = norm(el.nm.value) !== norm(p.name); };
    const close = UI.modal(el, () => App.render());
    el.querySelector('[data-no]').onclick = () => close();
    el.onsubmit = e => {
      e.preventDefault(); if (yes.disabled) return;
      Progress.removePlayer(p.id); close(true);
      App.show('players');
    };
    setTimeout(() => el.nm.focus(), 40);
  }

  App.screen('players', playersScreen);
})();
