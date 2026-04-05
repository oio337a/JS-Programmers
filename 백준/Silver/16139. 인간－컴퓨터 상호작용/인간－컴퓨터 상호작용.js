const fs = require('fs');
const [arr, m, ...input] = fs.readFileSync(0).toString().trim().split('\n');

let arr_len = arr.length;
const prefix = Array.from({ length: 26 }, () => Array(arr_len + 1).fill(0));

// prefix[i][j] = arr[0..j-1]까지에서 알파벳 i의 등장 횟수
for (let i = 0; i < arr_len; i++) {
  let code = arr.charCodeAt(i) - 97;
  for (let k = 0; k < 26; k++) {
    prefix[k][i + 1] = prefix[k][i];
  }
  prefix[code][i + 1]++;
}

const answer = []
for (let test of input) {
  let [character, s, e] = test.split(' ');
  s = Number(s);
  e = Number(e);
  let idx = character.charCodeAt(0) - 97;
  // [s, e] 구간 포함 → prefix[idx][e+1] - prefix[idx][s]
  answer.push(prefix[idx][e + 1] - prefix[idx][s]);
}

console.log(answer.join('\n'))