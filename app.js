const STORAGE_KEY = "kana-recall-progress-v1";

const BASIC_ROWS = [
  ["a", "あ", "ア"],
  ["i", "い", "イ"],
  ["u", "う", "ウ"],
  ["e", "え", "エ"],
  ["o", "お", "オ"],
  ["ka", "か", "カ"],
  ["ki", "き", "キ"],
  ["ku", "く", "ク"],
  ["ke", "け", "ケ"],
  ["ko", "こ", "コ"],
  ["sa", "さ", "サ"],
  ["shi", "し", "シ"],
  ["su", "す", "ス"],
  ["se", "せ", "セ"],
  ["so", "そ", "ソ"],
  ["ta", "た", "タ"],
  ["chi", "ち", "チ"],
  ["tsu", "つ", "ツ"],
  ["te", "て", "テ"],
  ["to", "と", "ト"],
  ["na", "な", "ナ"],
  ["ni", "に", "ニ"],
  ["nu", "ぬ", "ヌ"],
  ["ne", "ね", "ネ"],
  ["no", "の", "ノ"],
  ["ha", "は", "ハ"],
  ["hi", "ひ", "ヒ"],
  ["fu", "ふ", "フ"],
  ["he", "へ", "ヘ"],
  ["ho", "ほ", "ホ"],
  ["ma", "ま", "マ"],
  ["mi", "み", "ミ"],
  ["mu", "む", "ム"],
  ["me", "め", "メ"],
  ["mo", "も", "モ"],
  ["ya", "や", "ヤ"],
  ["yu", "ゆ", "ユ"],
  ["yo", "よ", "ヨ"],
  ["ra", "ら", "ラ"],
  ["ri", "り", "リ"],
  ["ru", "る", "ル"],
  ["re", "れ", "レ"],
  ["ro", "ろ", "ロ"],
  ["wa", "わ", "ワ"],
  ["wo", "を", "ヲ"],
  ["n", "ん", "ン"],
];

const VOICED_ROWS = [
  ["ga", "が", "ガ"],
  ["gi", "ぎ", "ギ"],
  ["gu", "ぐ", "グ"],
  ["ge", "げ", "ゲ"],
  ["go", "ご", "ゴ"],
  ["za", "ざ", "ザ"],
  ["ji", "じ", "ジ"],
  ["zu", "ず", "ズ"],
  ["ze", "ぜ", "ゼ"],
  ["zo", "ぞ", "ゾ"],
  ["da", "だ", "ダ"],
  ["di", "ぢ", "ヂ"],
  ["du", "づ", "ヅ"],
  ["de", "で", "デ"],
  ["do", "ど", "ド"],
  ["ba", "ば", "バ"],
  ["bi", "び", "ビ"],
  ["bu", "ぶ", "ブ"],
  ["be", "べ", "ベ"],
  ["bo", "ぼ", "ボ"],
  ["pa", "ぱ", "パ"],
  ["pi", "ぴ", "ピ"],
  ["pu", "ぷ", "プ"],
  ["pe", "ぺ", "ペ"],
  ["po", "ぽ", "ポ"],
];

const YOON_ROWS = [
  ["kya", "きゃ", "キャ"],
  ["kyu", "きゅ", "キュ"],
  ["kyo", "きょ", "キョ"],
  ["sha", "しゃ", "シャ"],
  ["shu", "しゅ", "シュ"],
  ["sho", "しょ", "ショ"],
  ["cha", "ちゃ", "チャ"],
  ["chu", "ちゅ", "チュ"],
  ["cho", "ちょ", "チョ"],
  ["nya", "にゃ", "ニャ"],
  ["nyu", "にゅ", "ニュ"],
  ["nyo", "にょ", "ニョ"],
  ["hya", "ひゃ", "ヒャ"],
  ["hyu", "ひゅ", "ヒュ"],
  ["hyo", "ひょ", "ヒョ"],
  ["mya", "みゃ", "ミャ"],
  ["myu", "みゅ", "ミュ"],
  ["myo", "みょ", "ミョ"],
  ["rya", "りゃ", "リャ"],
  ["ryu", "りゅ", "リュ"],
  ["ryo", "りょ", "リョ"],
];

const VOICED_YOON_ROWS = [
  ["gya", "ぎゃ", "ギャ"],
  ["gyu", "ぎゅ", "ギュ"],
  ["gyo", "ぎょ", "ギョ"],
  ["ja", "じゃ", "ジャ"],
  ["ju", "じゅ", "ジュ"],
  ["jo", "じょ", "ジョ"],
  ["bya", "びゃ", "ビャ"],
  ["byu", "びゅ", "ビュ"],
  ["byo", "びょ", "ビョ"],
  ["pya", "ぴゃ", "ピャ"],
  ["pyu", "ぴゅ", "ピュ"],
  ["pyo", "ぴょ", "ピョ"],
];

const DIFFICULTIES = {
  basic: ["basic"],
  yoon: ["basic", "yoon"],
  voiced: ["basic", "voiced"],
  complete: ["basic", "voiced", "yoon", "voicedYoon"],
};

const GROUPS = {
  basic: BASIC_ROWS,
  voiced: VOICED_ROWS,
  yoon: YOON_ROWS,
  voicedYoon: VOICED_YOON_ROWS,
};

const state = {
  mode: "learn",
  currentLearn: null,
  learnAnswerVisible: false,
  sidebarOpen: true,
  zenMode: false,
  practiceSession: null,
  memoryRandom: false,
  progress: loadProgress(),
};

const els = {
  appShell: document.querySelector(".app-shell"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  xp: document.querySelector("#xpValue"),
  level: document.querySelector("#levelValue"),
  streak: document.querySelector("#streakValue"),
  difficulty: document.querySelector("#difficultySelect"),
  script: document.querySelector("#scriptSelect"),
  direction: document.querySelector("#directionSelect"),
  tabs: document.querySelectorAll(".tab"),
  panes: document.querySelectorAll(".mode-pane"),
  learnScriptLabel: document.querySelector("#learnScriptLabel"),
  learnKana: document.querySelector("#learnKana"),
  learnRomaji: document.querySelector("#learnRomaji"),
  learnReveal: document.querySelector("#learnRevealBtn"),
  learnHint: document.querySelector("#learnHint"),
  learnAgain: document.querySelector("#learnAgainBtn"),
  learnKnow: document.querySelector("#learnKnowBtn"),
  kanaMap: document.querySelector("#kanaMap"),
  mapCount: document.querySelector("#mapCount"),
  practiceSetup: document.querySelector("#practiceSetup"),
  practiceRun: document.querySelector("#practiceRun"),
  practiceResult: document.querySelector("#practiceResult"),
  practiceMode: document.querySelector("#practiceModeSelect"),
  questionCount: document.querySelector("#questionCountSelect"),
  practiceSetupSummary: document.querySelector("#practiceSetupSummary"),
  startPractice: document.querySelector("#startPracticeBtn"),
  practiceAgain: document.querySelector("#practiceAgainBtn"),
  practiceRepeat: document.querySelector("#practiceRepeatBtn"),
  endPractice: document.querySelector("#endPracticeBtn"),
  zenPractice: document.querySelector("#zenPracticeBtn"),
  exitZenResult: document.querySelector("#exitZenResultBtn"),
  practiceProgress: document.querySelector("#practiceProgress"),
  practiceScore: document.querySelector("#practiceScore"),
  practiceScriptLabel: document.querySelector("#practiceScriptLabel"),
  practicePrompt: document.querySelector("#practicePrompt"),
  practiceChoiceGrid: document.querySelector("#practiceChoiceGrid"),
  gapForm: document.querySelector("#gapForm"),
  gapAnswer: document.querySelector("#gapAnswerInput"),
  practiceFeedback: document.querySelector("#practiceFeedback"),
  practiceResultScore: document.querySelector("#practiceResultScore"),
  practiceResultSummary: document.querySelector("#practiceResultSummary"),
  practiceMistakes: document.querySelector("#practiceMistakes"),
  toggleOrder: document.querySelector("#toggleOrderBtn"),
  checkMemory: document.querySelector("#checkMemoryBtn"),
  memoryGrid: document.querySelector("#memoryGrid"),
  memoryPrompt: document.querySelector("#memoryPrompt"),
  memorySummary: document.querySelector("#memorySummary"),
  confidence: document.querySelector("#confidenceValue"),
  confidenceMeter: document.querySelector("#confidenceMeter"),
  practiced: document.querySelector("#practicedValue"),
  accuracy: document.querySelector("#accuracyValue"),
  badge: document.querySelector("#badgeValue"),
  focusList: document.querySelector("#focusList"),
  resetProgress: document.querySelector("#resetProgressBtn"),
};

function makeItems() {
  const items = [];
  Object.entries(GROUPS).forEach(([group, rows]) => {
    rows.forEach(([romaji, hiragana, katakana], order) => {
      items.push({
        id: `${group}:hiragana:${romaji}`,
        group,
        script: "hiragana",
        kana: hiragana,
        romaji,
        order,
      });
      items.push({
        id: `${group}:katakana:${romaji}`,
        group,
        script: "katakana",
        kana: katakana,
        romaji,
        order,
      });
    });
  });
  return items;
}

const ALL_ITEMS = makeItems();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      xp: saved?.xp || 0,
      streak: saved?.streak || 0,
      attempts: saved?.attempts || 0,
      correct: saved?.correct || 0,
      items: saved?.items || {},
      badges: saved?.badges || [],
    };
  } catch {
    return { xp: 0, streak: 0, attempts: 0, correct: 0, items: {}, badges: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function selectedItems() {
  const groups = DIFFICULTIES[els.difficulty.value];
  return ALL_ITEMS.filter((item) => {
    const scriptMatch = els.script.value === "both" || item.script === els.script.value;
    return groups.includes(item.group) && scriptMatch;
  });
}

function progressFor(id) {
  if (!state.progress.items[id]) {
    state.progress.items[id] = {
      seen: 0,
      correct: 0,
      wrong: 0,
      mastery: 0,
      due: 0,
    };
  }
  return state.progress.items[id];
}

function record(item, isCorrect, xpValue) {
  const itemProgress = progressFor(item.id);
  itemProgress.seen += 1;
  state.progress.attempts += 1;

  if (isCorrect) {
    itemProgress.correct += 1;
    itemProgress.mastery = Math.min(5, itemProgress.mastery + 1);
    itemProgress.due = Date.now() + [0, 30, 120, 900, 3600, 86400][itemProgress.mastery] * 1000;
    state.progress.correct += 1;
    state.progress.streak += 1;
    state.progress.xp += xpValue;
  } else {
    itemProgress.wrong += 1;
    itemProgress.mastery = Math.max(0, itemProgress.mastery - 1);
    itemProgress.due = Date.now();
    state.progress.streak = 0;
    state.progress.xp += Math.max(1, Math.floor(xpValue / 4));
  }

  updateBadges();
  saveProgress();
  renderHeader();
}

function updateBadges() {
  const badges = new Set(state.progress.badges);
  const mastered = ALL_ITEMS.filter((item) => progressFor(item.id).mastery >= 4).length;
  if (state.progress.streak >= 5) badges.add("5 streak");
  if (state.progress.streak >= 20) badges.add("20 streak");
  if (state.progress.xp >= 250) badges.add("250 XP");
  if (mastered >= 46) badges.add("First script confident");
  state.progress.badges = Array.from(badges);
}

function pickDueItem(items) {
  const now = Date.now();
  return [...items].sort((a, b) => {
    const pa = progressFor(a.id);
    const pb = progressFor(b.id);
    const aScore = (pa.due <= now ? -20 : 0) + pa.mastery * 6 + pa.seen;
    const bScore = (pb.due <= now ? -20 : 0) + pb.mastery * 6 + pb.seen;
    return aScore - bScore + Math.random() - 0.5;
  })[0];
}

function renderHeader() {
  els.xp.textContent = state.progress.xp;
  els.level.textContent = Math.max(1, Math.floor(state.progress.xp / 120) + 1);
  els.streak.textContent = state.progress.streak;
}

function renderLearn() {
  const items = selectedItems();
  state.currentLearn = pickDueItem(items);
  state.learnAnswerVisible = false;
  renderLearnCard();
}

function renderLearnCard() {
  const progress = progressFor(state.currentLearn.id);
  els.learnScriptLabel.textContent = labelFor(state.currentLearn.script);
  els.learnKana.textContent = state.currentLearn.kana;
  els.learnRomaji.textContent = state.learnAnswerVisible ? state.currentLearn.romaji : "Tap to reveal";
  els.learnReveal.classList.toggle("is-revealed", state.learnAnswerVisible);
  els.learnReveal.setAttribute("aria-label", state.learnAnswerVisible ? `Answer ${state.currentLearn.romaji}` : "Reveal romaji answer");
  els.learnHint.textContent = state.learnAnswerVisible
    ? `Mastery ${progress.mastery}/5. ${state.currentLearn.groupLabel || labelForGroup(state.currentLearn.group)} practice.`
    : "Study the shape first, then tap to reveal the reading.";
}

function renderMap() {
  const items = ALL_ITEMS;
  els.mapCount.textContent = `${items.length} items`;
  els.kanaMap.innerHTML = "";
  items.forEach((item) => {
    const tile = document.createElement("div");
    const progress = progressFor(item.id);
    tile.className = `map-tile ${progress.mastery >= 4 ? "mastered" : ""}`;
    tile.innerHTML = `
      <span class="tile-kana">${item.kana}</span>
      <span class="tile-romaji">${item.romaji}</span>
      <span class="tile-script">${labelFor(item.script)} ${labelForGroup(item.group)}</span>
      <span class="tile-script">Mastery ${progress.mastery}/5</span>
    `;
    els.kanaMap.append(tile);
  });
}

function renderPracticeSetup() {
  setZenMode(false);
  const itemCount = selectedItems().length;
  const level = { 10: "Level 1", 15: "Level 2", 20: "Level 3" }[els.questionCount.value];
  els.practiceSetup.classList.remove("is-hidden");
  els.practiceRun.classList.remove("is-active");
  els.practiceResult.classList.remove("is-active");
  els.practiceSetupSummary.textContent = `${level} will draw from ${itemCount} kana in your current sidebar settings.`;
}

function startPractice() {
  const items = selectedItems();
  const count = Math.min(Number(els.questionCount.value), items.length);
  const queue = buildPracticeQueue(items, count);
  state.practiceSession = {
    mode: els.practiceMode.value,
    count,
    queue,
    index: 0,
    correct: 0,
    mistakes: [],
    answered: false,
    direction: els.direction.value,
  };
  renderPracticeQuestion();
}

function buildPracticeQueue(items, count) {
  const dueItems = [...items].sort((a, b) => {
    const pa = progressFor(a.id);
    const pb = progressFor(b.id);
    return pa.mastery - pb.mastery || pb.wrong - pa.wrong || Math.random() - 0.5;
  });
  return shuffle(dueItems).slice(0, count);
}

function renderPracticeQuestion() {
  const session = state.practiceSession;
  if (!session || session.index >= session.queue.length) {
    renderPracticeResult();
    return;
  }

  const item = session.queue[session.index];
  const prompt = session.direction === "kanaToRomaji" ? item.kana : item.romaji;
  const answer = session.direction === "kanaToRomaji" ? item.romaji : item.kana;
  session.answered = false;

  els.practiceSetup.classList.add("is-hidden");
  els.practiceRun.classList.add("is-active");
  els.practiceResult.classList.remove("is-active");
  els.practiceProgress.textContent = `Question ${session.index + 1}/${session.count}`;
  els.practiceScore.textContent = `${session.correct} correct`;
  els.practiceScriptLabel.textContent = `${labelFor(item.script)} ${session.direction === "kanaToRomaji" ? "to romaji" : "from romaji"}`;
  els.practicePrompt.textContent = prompt;
  els.practiceFeedback.textContent = session.mode === "choice" ? "Pick the matching answer." : "Type the matching answer.";
  els.practiceChoiceGrid.innerHTML = "";
  els.gapAnswer.value = "";
  els.gapAnswer.disabled = false;

  if (session.mode === "choice") {
    els.practiceChoiceGrid.style.display = "";
    els.gapForm.classList.remove("is-active");
    buildOptions(selectedItems(), answer, session.direction).forEach((option) => {
      const button = document.createElement("button");
      button.className = "choice-option";
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => answerPractice(option));
      els.practiceChoiceGrid.append(button);
    });
  } else {
    els.practiceChoiceGrid.style.display = "none";
    els.gapForm.classList.add("is-active");
    window.setTimeout(() => els.gapAnswer.focus(), 0);
  }
}

function buildOptions(items, answer, direction) {
  const values = items.map((item) => (direction === "kanaToRomaji" ? item.romaji : item.kana));
  const options = new Set([answer]);
  while (options.size < 4 && options.size < values.length) {
    options.add(values[Math.floor(Math.random() * values.length)]);
  }
  return shuffle(Array.from(options));
}

function answerPractice(value) {
  const session = state.practiceSession;
  if (!session || session.answered) return;

  const item = session.queue[session.index];
  const correctAnswer = session.direction === "kanaToRomaji" ? item.romaji : item.kana;
  const isCorrect = normalize(value) === normalize(correctAnswer);
  session.answered = true;
  if (isCorrect) session.correct += 1;
  if (!isCorrect) {
    session.mistakes.push({
      prompt: session.direction === "kanaToRomaji" ? item.kana : item.romaji,
      script: item.script,
      userAnswer: value || "(blank)",
      correctAnswer,
    });
  }

  els.practiceChoiceGrid.querySelectorAll("button").forEach((option) => {
    option.disabled = true;
    if (normalize(option.textContent) === normalize(correctAnswer)) option.classList.add("correct");
    if (normalize(option.textContent) === normalize(value) && !isCorrect) option.classList.add("wrong");
  });

  els.gapAnswer.disabled = true;
  record(item, isCorrect, session.mode === "choice" ? 12 : 14);
  els.practiceScore.textContent = `${session.correct} correct`;
  els.practiceFeedback.textContent = isCorrect
    ? `Correct. ${session.mode === "choice" ? "+12" : "+14"} XP.`
    : `Answer: ${correctAnswer}. This item stays in your focus queue.`;

  window.setTimeout(() => {
    session.index += 1;
    renderPracticeQuestion();
  }, isCorrect ? 750 : 1300);
}

function renderPracticeResult() {
  const session = state.practiceSession;
  if (!session) {
    renderPracticeSetup();
    return;
  }
  const percent = Math.round((session.correct / Math.max(1, session.count)) * 100);
  const level = { 10: "Level 1", 15: "Level 2", 20: "Level 3" }[session.count] || "Level";
  els.practiceSetup.classList.add("is-hidden");
  els.practiceRun.classList.remove("is-active");
  els.practiceResult.classList.add("is-active");
  els.practiceResultScore.textContent = `${session.correct}/${session.count}`;
  els.practiceResultSummary.textContent = `${level} complete with ${percent}% accuracy. ${rewardLine(percent)}`;
  els.exitZenResult.style.display = state.zenMode ? "" : "none";
  renderPracticeMistakes(session);
  renderStats();
}

function renderPracticeMistakes(session) {
  if (!session.mistakes.length) {
    els.practiceMistakes.innerHTML = '<div class="mistake-empty">No mistakes this round.</div>';
    return;
  }

  els.practiceMistakes.innerHTML = `
    <div class="mistake-panel">
      <div class="mistake-title">Review mistakes</div>
      <div class="mistake-list">
        ${session.mistakes
          .map(
            (mistake) => `
              <div class="mistake-item">
                <span><strong>${mistake.prompt}</strong> ${labelFor(mistake.script)}</span>
                <span>Your answer: ${mistake.userAnswer}</span>
                <span>Correct: ${mistake.correctAnswer}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMemory() {
  const items = state.memoryRandom ? shuffle(selectedItems()) : selectedItems();
  const direction = els.direction.value;
  els.memoryGrid.innerHTML = "";
  els.memorySummary.textContent = "";
  els.memoryPrompt.textContent =
    direction === "kanaToRomaji"
      ? "Write romaji for each kana prompt."
      : "Write kana for each romaji prompt.";
  els.toggleOrder.textContent = state.memoryRandom ? "Ordered" : "Random order";

  items.forEach((item) => {
    const prompt = direction === "kanaToRomaji" ? item.kana : item.romaji;
    const cell = document.createElement("div");
    cell.className = "memory-cell";
    cell.dataset.itemId = item.id;
    cell.dataset.answer = direction === "kanaToRomaji" ? item.romaji : item.kana;
    cell.innerHTML = `
      <label>${prompt}</label>
      <span class="tile-script">${labelFor(item.script)}</span>
      <input autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer for ${prompt}" />
    `;
    els.memoryGrid.append(cell);
  });
}

function checkMemory() {
  const cells = [...els.memoryGrid.querySelectorAll(".memory-cell")];
  let correctCount = 0;
  cells.forEach((cell) => {
    const item = ALL_ITEMS.find((candidate) => candidate.id === cell.dataset.itemId);
    const input = cell.querySelector("input");
    const answer = normalize(cell.dataset.answer);
    const isCorrect = normalize(input.value) === answer;
    cell.classList.toggle("correct", isCorrect);
    cell.classList.toggle("wrong", !isCorrect);
    if (!isCorrect && !cell.querySelector(".correction")) {
      const correction = document.createElement("span");
      correction.className = "tile-script correction";
      correction.textContent = `Answer: ${cell.dataset.answer}`;
      cell.append(correction);
    }
    if (isCorrect) correctCount += 1;
    record(item, isCorrect, 4);
  });

  const percent = Math.round((correctCount / Math.max(1, cells.length)) * 100);
  els.memorySummary.textContent = `${correctCount}/${cells.length} correct (${percent}%). ${rewardLine(percent)}`;
  renderStats();
}

function renderStats() {
  const items = selectedItems();
  const mastered = items.filter((item) => progressFor(item.id).mastery >= 4).length;
  const confidence = Math.round((mastered / Math.max(1, items.length)) * 100);
  const accuracy = Math.round((state.progress.correct / Math.max(1, state.progress.attempts)) * 100);
  els.confidence.textContent = `${confidence}%`;
  els.confidenceMeter.style.width = `${confidence}%`;
  els.practiced.textContent = state.progress.attempts;
  els.accuracy.textContent = `${accuracy}%`;
  els.badge.textContent = state.progress.badges.length;

  const focus = [...items]
    .sort((a, b) => progressFor(a.id).mastery - progressFor(b.id).mastery || progressFor(b.id).wrong - progressFor(a.id).wrong)
    .slice(0, 10);
  els.focusList.innerHTML = "";
  focus.forEach((item) => {
    const progress = progressFor(item.id);
    const row = document.createElement("div");
    row.className = "focus-item";
    row.innerHTML = `
      <span><strong>${item.kana}</strong> ${item.romaji}</span>
      <span>${labelFor(item.script)} mastery ${progress.mastery}/5</span>
    `;
    els.focusList.append(row);
  });
}

function rewardLine(percent) {
  if (percent === 100) return "Perfect board. Badge progress gained.";
  if (percent >= 85) return "Strong run. Keep the streak alive.";
  if (percent >= 60) return "Useful practice. Weak spots were queued again.";
  return "Good diagnostic. Repeat the focus queue next.";
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function labelFor(script) {
  return script === "hiragana" ? "Hiragana" : "Katakana";
}

function labelForGroup(group) {
  return {
    basic: "Main kana",
    voiced: "Dakuten and handakuten",
    yoon: "Yoon",
    voicedYoon: "Voiced yoon",
  }[group];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setMode(mode) {
  if (mode !== "practice") setZenMode(false);
  state.mode = mode;
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.mode === mode));
  els.panes.forEach((pane) => pane.classList.toggle("is-active", pane.id === `${mode}Pane`));
  renderActiveMode();
}

function setZenMode(isEnabled) {
  state.zenMode = isEnabled;
  els.appShell.classList.toggle("zen-mode", isEnabled);
  els.zenPractice.textContent = isEnabled ? "Exit zen" : "Zen mode";
  els.zenPractice.setAttribute("aria-pressed", String(isEnabled));
}

function renderActiveMode() {
  renderHeader();
  if (state.mode === "learn") renderLearn();
  if (state.mode === "map") renderMap();
  if (state.mode === "practice") renderPracticeSetup();
  if (state.mode === "memory") renderMemory();
  if (state.mode === "stats") renderStats();
}

els.tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));
[els.difficulty, els.script, els.direction].forEach((select) => {
  select.addEventListener("change", () => {
    state.practiceSession = null;
    renderActiveMode();
  });
});

els.questionCount.addEventListener("change", () => {
  if (state.mode === "practice" && !state.practiceSession) renderPracticeSetup();
});

els.sidebarToggle.addEventListener("click", () => {
  state.sidebarOpen = !state.sidebarOpen;
  els.appShell.classList.toggle("sidebar-collapsed", !state.sidebarOpen);
  els.sidebarToggle.setAttribute("aria-expanded", String(state.sidebarOpen));
  els.sidebarToggle.textContent = state.sidebarOpen ? "Hide menu" : "Show menu";
});

els.learnAgain.addEventListener("click", () => {
  record(state.currentLearn, false, 4);
  renderLearn();
});

els.learnReveal.addEventListener("click", () => {
  state.learnAnswerVisible = true;
  renderLearnCard();
});

els.learnKnow.addEventListener("click", () => {
  record(state.currentLearn, true, 10);
  renderLearn();
});

els.startPractice.addEventListener("click", startPractice);

els.practiceAgain.addEventListener("click", () => {
  state.practiceSession = null;
  renderPracticeSetup();
});

els.practiceRepeat.addEventListener("click", startPractice);

els.endPractice.addEventListener("click", () => {
  renderPracticeResult();
});

els.zenPractice.addEventListener("click", () => {
  setZenMode(!state.zenMode);
});

els.exitZenResult.addEventListener("click", () => {
  setZenMode(false);
});

els.gapForm.addEventListener("submit", (event) => {
  event.preventDefault();
  answerPractice(els.gapAnswer.value);
});

els.toggleOrder.addEventListener("click", () => {
  state.memoryRandom = !state.memoryRandom;
  renderMemory();
});

els.checkMemory.addEventListener("click", checkMemory);

els.resetProgress.addEventListener("click", () => {
  const confirmed = window.confirm("Clear all local Kana Recall progress from this browser?");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  state.progress = loadProgress();
  renderActiveMode();
});

renderActiveMode();
els.sidebarToggle.textContent = "Hide menu";
