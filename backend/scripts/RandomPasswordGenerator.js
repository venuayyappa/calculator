const input1 = document.querySelector("#rpg-input-1");
const input2 = document.querySelector("#rpg-input-2");
const rpgCheckLower = document.querySelector("#rpgChechkLower");
const rpgCheckUpper = document.querySelector("#rpgChechkUpper");
const rpgCheckNumber = document.querySelector("#rpgChechkNumber");
const rpgCheckSymbol = document.querySelector("#rpgChechkSymbol");
const rpgCheckNoRepeat = document.querySelector("#rpgChechkNoRepeat");
const rpgResult = document.querySelector("#rpg-result");
const rpgGenButton = document.querySelector("#rpg-gen-button");
const rpgCheckboxes = document.querySelectorAll("#check-boxes input[type='checkbox']");

const numbers = "123456789".split("");
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

function getAvailableChars() {
  let charPool = [];
  if (rpgCheckNumber.checked) charPool = charPool.concat(numbers);
  if (rpgCheckLower.checked) charPool = charPool.concat(letters);
  if (rpgCheckUpper.checked) charPool = charPool.concat(letters.map(l => l.toUpperCase()));
  if (rpgCheckSymbol.checked) charPool = charPool.concat(symbols);
  return charPool;
}

function getRandomChar(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function generatePassword() {
  const length = parseInt(input1.value, 10);
  const charPool = getAvailableChars();

  if (charPool.length === 0) {
    rpgResult.innerHTML = `
      <li class="list-group-item bg-danger-subtle text-warning-emphasis">
        Please select at least one character set.
      </li>`;
    return;
  }

  if (rpgCheckNoRepeat.checked && length > charPool.length) {
    rpgResult.innerHTML = `
      <li class="list-group-item bg-danger-subtle text-warning-emphasis">
        Not enough unique characters to create a non-repeating password of length ${length}.
      </li>`;
    return;
  }

  const result = [];
  const used = new Set();

  while (result.length < length) {
    const char = getRandomChar(charPool);
    if (rpgCheckNoRepeat.checked && used.has(char)) continue;
    result.push(char);
    used.add(char);
  }

  rpgResult.innerHTML = `
    <li class="list-group-item">
      <span>${result.join("")}</span>
    </li>`;
}

// Sync inputs
function syncInputs(e) {
  const val = Math.min(50, Math.max(4, e.target.value));
  input1.value = val;
  input2.value = val;
  generatePassword();
}

input1.addEventListener("input", syncInputs);
input2.addEventListener("input", syncInputs);
rpgGenButton.addEventListener("click", generatePassword);
rpgCheckboxes.forEach(cb => cb.addEventListener("click", generatePassword));
window.addEventListener("load", generatePassword);
