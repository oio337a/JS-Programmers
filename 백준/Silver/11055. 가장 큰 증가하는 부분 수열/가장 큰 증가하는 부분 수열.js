const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const A = input[1].split(" ").map(Number);

let dp = A.slice(0)

// 점화식 적용
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }
}

// 결과 출력
console.log(Math.max(...dp));