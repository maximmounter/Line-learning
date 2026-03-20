// ── State ──
let parsedLines = [];
let selectedChar = '';
let revealed = [];
let allDetectedChars = [];

// ── Color palette for characters ──
const CHAR_COLORS = [
  { bg: '#dbeafe', text: '#1d4ed8' },
  { bg: '#d1fae5', text: '#065f46' },
  { bg: '#fee2e2', text: '#991b1b' },
  { bg: '#fce7f3', text: '#9d174d' },
  { bg: '#fef3c7', text: '#92400e' },
  { bg: '#ede9fe', text: '#5b21b6' },
];

// ── Stage directions to ignore ──
const STAGE_WORDS = new Set([
  'intermission', 'end', 'prologue', 'epilogue', 'blackout', 'lights',
  'curtain', 'exit', 'exeunt', 'enter', 'offstage', 'onstage', 'aside',
  'chorus', 'ensemble', 'company', 'narrator', 'pause', 'silence',
  'music', 'song', 'dance', 'spotlight', 'freeze', 'transition', 'the end'
]);

// ── Helpers ──
function isCharName(line) {
  const t = line.trim();
  if (!t) return false;
  if (t.startsWith('[')) return false;
  if (/[.,!?;]/.test(t)) return false;
  if (STAGE_WORDS.has(t.toLowerCase())) return false;
  if (/^(act|scene)\s/i.test(t)) return false;
  // 1–4 words, each starting with a capital letter
  return /^[A-Z][a-zA-Z'-]*(\s[A-Z][a-zA-Z'-]*){0,3}$/.test(t);
}

function getColor(index) {
  return CHAR_COLORS[index % CHAR_COLORS.length];
}

// ── Parse script ──
function parseScript() {
  const raw = document.getElementById('script-input').value.trim();
  if (!raw) return;

  const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  parsedLines = [];
  let currentScene = '';
  const chars = new Set();
  const ignored = new Set();
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    const sceneMatch = line.match(/^\[(.+)\]$/);
    if (sceneMatch) {
      currentScene = sceneMatch[1];
      i++;
      continue;
    }

    if (STAGE_WORDS.has(line.trim().toLowerCase())) {
      ignored.add(line.trim());
      i++;
      continue;
    }

    if (/^(act|scene)\s/i.test(line.trim())) {
      i++;
      continue;
    }

    const nextLine = lines[i + 1];
    if (isCharName(line) && nextLine && !isCharName(nextLine) && !nextLine.startsWith('[')) {
      const char = line.trim();
      const text = nextLine.trim();
      chars.add(char);
      parsedLines.push({ char, text, scene: currentScene });
      i += 2;
      continue;
    }

    i++;
  }

  allDetectedChars = [...chars];
  renderCharPicker(allDetectedChars);

  const notice = document.getElementById('ignored-notice');
  if (ignored.size > 0) {
    notice.style.display = 'block';
    notice.textContent = 'Ignored stage directions: ' + [...ignored].join(', ');
  } else {
    notice.style.display = 'none';
  }
}

// ── Render character picker ──
function renderCharPicker(charArr) {
  const picker = document.getElementById('char-picker');

  if (!charArr.length) {
    picker.innerHTML = '<span class="muted">No characters found — check format or type your name below.</span>';
    return;
  }

  picker.innerHTML = charArr.map((c, idx) => {
    const col = getColor(idx);
    const isActive = c === selectedChar;
    return `<span class="pill-char ${isActive ? 'active' : ''}"
      style="background:${col.bg}; color:${col.text};"
      onclick="selectChar('${c}', this)">${c}</span>`;
  }).join('');

  if (!selectedChar && charArr.length > 0) {
    selectChar(charArr[0], picker.querySelector('.pill-char'));
  }
}

// ── Add manual character ──
function addManualChar() {
  const input = document.getElementById('manual-char');
  const name = input.value.trim();
  if (!name) return;
  if (!allDetectedChars.includes(name)) allDetectedChars.push(name);
  renderCharPicker(allDetectedChars);
  selectChar(name, null);
  document.querySelectorAll('.pill-char').forEach(p => {
    if (p.textContent === name) p.classList.add('active');
  });
  input.value = '';
}

// ── Select character ──
function selectChar(char, el) {
  selectedChar = char;
  document.querySelectorAll('.pill-char').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
}

// ── Start practice ──
function startPractice() {
  if (!parsedLines.length) parseScript();
  if (!parsedLines.length) return;
  if (!selectedChar) {
    alert('Please select your character first.');
    return;
  }

  const myLines = parsedLines.filter(l => l.char === selectedChar);
  if (!myLines.length) {
    document.getElementById('no-lines-msg').style.display = 'block';
    return;
  }

  document.getElementById('no-lines-msg').style.display = 'none';
  revealed = new Array(parsedLines.length).fill(false);
  renderPractice();
  document.getElementById('setup-area').style.display = 'none';
  document.getElementById('practice-area').style.display = 'block';
}

// ── Render practice view ──
function renderPractice() {
  const myLines = parsedLines.filter(l => l.char === selectedChar);
  document.getElementById('char-label').textContent = selectedChar;
  document.getElementById('line-count-tag').textContent = myLines.length + ' lines';
  updateProgress();

  const charList = [...new Set(parsedLines.map(l => l.char))];
  const charColorMap = {};
  charList.forEach((c, i) => { charColorMap[c] = getColor(i); });

  let html = '';
  let lastScene = null;

  parsedLines.forEach((line, i) => {
    if (line.scene && line.scene !== lastScene) {
      html += `<div class="scene-header">${line.scene}</div>`;
      lastScene = line.scene;
    }

    const col = charColorMap[line.char];

    if (line.char === selectedChar) {
      const isRevealed = revealed[i];
      html += `
        <div class="my-line-hidden ${isRevealed ? 'revealed' : ''}" id="line-${i}" onclick="toggleLine(${i})">
          <span>
            <span class="char-badge" style="background:${col.bg}; color:${col.text};">${line.char}</span>${line.text}
          </span>
          ${!isRevealed ? '<span class="reveal-hint">tap to reveal</span>' : ''}
        </div>`;
    } else {
      html += `
        <div class="cue-line">
          <span class="char-badge" style="background:${col.bg}; color:${col.text};">${line.char}</span>${line.text}
        </div>`;
    }
  });

  document.getElementById('script-display').innerHTML = html;
}

// ── Toggle a single line ──
function toggleLine(i) {
  revealed[i] = !revealed[i];
  const el = document.getElementById('line-' + i);
  el.classList.toggle('revealed', revealed[i]);
  const hint = el.querySelector('.reveal-hint');
  if (hint) hint.style.display = revealed[i] ? 'none' : '';
  updateProgress();
}

// ── Update progress bar ──
function updateProgress() {
  const myIdxs = parsedLines
    .map((l, i) => l.char === selectedChar ? i : -1)
    .filter(x => x >= 0);
  const done = myIdxs.filter(i => revealed[i]).length;
  const pct = myIdxs.length ? Math.round(done / myIdxs.length * 100) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('stats').textContent =
    `${done} of ${myIdxs.length} lines revealed (${pct}%)`;
}

// ── Reveal / hide / reset ──
function revealAll() {
  parsedLines.forEach((l, i) => { if (l.char === selectedChar) revealed[i] = true; });
  renderPractice();
}

function hideAll() {
  parsedLines.forEach((l, i) => { if (l.char === selectedChar) revealed[i] = false; });
  renderPractice();
}

function resetPractice() {
  revealed = new Array(parsedLines.length).fill(false);
  renderPractice();
}

// ── Go back to setup ──
function goSetup() {
  document.getElementById('setup-area').style.display = 'block';
  document.getElementById('practice-area').style.display = 'none';
}
