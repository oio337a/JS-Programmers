const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0].trim();
const N = parseInt(input[1].trim(), 10);
const A = input.slice(2, 2 + N);

function canBuild(S, A) {
  const len = S.length;
  const dp = Array(len + 1).fill(false);
  dp[0] = true; // 빈 문자열은 항상 만들 수 있음

  for (let i = 0; i < len; i++) {
    if (!dp[i]) continue; // i까지 못 만들면 스킵
    for (const word of A) {
      const next = i + word.length;
      if (next <= len && S.slice(i, next) === word) {
        dp[next] = true;
      }
    }
  }

  return dp[len] ? 1 : 0;
}

console.log(canBuild(S, A));