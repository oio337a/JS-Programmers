const fs = require('fs');
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(lines[0]);
const base = (lines[1] || '').trim();

function getCountArr(word) {
  const arr = new Array(26).fill(0);
  if (!word) return arr;
  for (const ch of word.toUpperCase()) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) arr[code - 65]++;
  }
  return arr;
}

const baseCount = getCountArr(base);
let answer = 0;

for (let i = 2; i <= N; i++) {
  const word = (lines[i] || '').trim();
  if (word === '') continue; // 안전장치

  const wc = getCountArr(word);

  let diff = 0;
  for (let k = 0; k < 26; k++) diff += Math.abs(baseCount[k] - wc[k]);

  const lenDiff = Math.abs(base.length - word.length);

  if (lenDiff <= 1 && diff <= 2) answer++;
}

console.log(answer);
