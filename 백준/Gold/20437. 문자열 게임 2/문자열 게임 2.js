const fs = require('fs');
const lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let t = Number(lines[0]);
let out = [];
let idxLine = 1;

while (t--) {
  const W = lines[idxLine++].trim();
  const K = Number(lines[idxLine++]);

  // 각 알파벳 등장 인덱스 모으기
  const pos = Array.from({ length: 26 }, () => []);
  for (let i = 0; i < W.length; i++) {
    const c = W.charCodeAt(i) - 97; // 'a'..'z'
    pos[c].push(i);
  }

  let minLen = Infinity;
  let maxLen = -Infinity;

  for (let c = 0; c < 26; c++) {
    const arr = pos[c];
    if (arr.length < K) continue;

    // 윈도우 크기 K로 길이 계산
    for (let i = 0; i + K - 1 < arr.length; i++) {
      const len = arr[i + K - 1] - arr[i] + 1;
      if (len < minLen) minLen = len;
      if (len > maxLen) maxLen = len;
    }
  }

  if (maxLen === -Infinity) out.push('-1');
  else out.push(`${minLen} ${maxLen}`);
}

console.log(out.join('\n'));
