const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const T = input[0];
const nums = input.slice(1);
const maxN = Math.max(...nums);

// dp[i] = i를 만드는 경우의 수
const dp = Array(maxN + 1).fill(0);

// 1로만 만드는 경우 → 항상 1
for (let i = 0; i <= maxN; i++) dp[i] = 1;

// 2까지 포함
for (let i = 2; i <= maxN; i++) {
  dp[i] += dp[i - 2];
}

// 3까지 포함
for (let i = 3; i <= maxN; i++) {
  dp[i] += dp[i - 3];
}

let result = '';
for (const n of nums) {
  result += dp[n] + '\n';
}
console.log(result.trim());
