const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// input[0] = N, input[1] = 첫번째 아이, input[2] = 두번째 아이 ...
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0], 10);

if (N <= 1) {
  console.log(0);
  process.exit(0);
}
// input 배열의 첫번째 요소(N)를 제외하고 모두 숫자로 변환합니다.
const children = input.slice(1).map(Number);

// dp[i]는 i번째 아이를 마지막으로 하는 LIS의 길이를 저장합니다.
const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (children[j] < children[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

// dp 배열의 최댓값이 LIS의 길이입니다.
const lisLength = Math.max(...dp);

// "전체 아이 수 - LIS 길이" 가 최종 정답입니다.
const result = N - lisLength;

console.log(result);