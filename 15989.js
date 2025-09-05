const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n').map(Number);

const T = input[0];
const nums = input.slice(1);
const maxN = Math.max(...nums);

const dp = Array.from({ length: maxN + 1 }, () => Array(4).fill(0));

// 초기값
dp[0][1] = 1; // 0을 만드는 경우는 "아무것도 안 쓰기" 1가지 (편의상)
dp[0][2] = dp[0][3] = 0;

for (let n = 1; n <= maxN; n++) {
  dp[n][1] = 1; // n은 1만 써서 만드는 경우 항상 1가지
  if (n - 2 >= 0) dp[n][2] = dp[n - 2][1] + dp[n - 2][2];
  if (n - 3 >= 0) dp[n][3] = dp[n - 3][1] + dp[n - 3][2] + dp[n - 3][3];
}

let result = '';
for (const n of nums) {
  result += (dp[n][1] + dp[n][2] + dp[n][3]) + '\n';
}
console.log(result.trim());

// ------------------------- //

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

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
