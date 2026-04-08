const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [R, C, Q] = input[0].split(" ").map(Number);
const board = input.slice(1, R + 1).map((item) => item.split(" ").map(Number));
const range = input.slice(R + 1, Q + R + 1).map((item) => item.split(" ").map(Number));

const prefix = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));

// 누적합 계산
for (let i = 1; i <= R; i++) {
  for (let j = 1; j <= C; j++) {
    prefix[i][j] =
      board[i - 1][j - 1] +
      prefix[i - 1][j] +
      prefix[i][j - 1] -
      prefix[i - 1][j - 1];
  }
}

const answer = [];
for (let [r1, c1, r2, c2] of range) {
  const sum =
    prefix[r2][c2] -
    prefix[r1 - 1][c2] -
    prefix[r2][c1 - 1] +
    prefix[r1 - 1][c1 - 1];

  const count = (r2 - r1 + 1) * (c2 - c1 + 1);
  answer.push(Math.floor(sum / count));
}

console.log(answer.join("\n"));