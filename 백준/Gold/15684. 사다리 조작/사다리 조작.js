/**
 * 사다리 조작
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, H] = input[0].split(' ').map(Number);
const ladder = Array.from({ length: H + 1 }, () => Array(N + 1).fill(false));

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  ladder[a][b] = true;
}

function isCorrect() {
  for (let i = 1; i <= N; i++) {
    let pos = i;
    for (let j = 1; j <= H; j++) {
      if (ladder[j][pos]) pos++;
      else if (ladder[j][pos - 1]) pos--;
    }
    if (pos !== i) return false;
  }
  return true;
}

function dfs(count, x, y) {
  if (count > 3) return Infinity;
  if (isCorrect()) return count;

  let min = Infinity;

  for (let i = x; i <= H; i++) {
    for (let j = i === x ? y : 1; j < N; j++) {
      if (!ladder[i][j] && !ladder[i][j - 1] && !ladder[i][j + 1]) {
        ladder[i][j] = true;
        min = Math.min(min, dfs(count + 1, i, j));
        ladder[i][j] = false;
      }
    }
  }

  return min;
}

const result = dfs(0, 1, 1);
console.log(result > 3 ? -1 : result);
