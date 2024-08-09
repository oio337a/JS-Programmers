/**
 * 가장 큰 정사각형
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const matrix = input.slice(1).map((line) => line.split('').map(Number));

// DP 배열 초기화
const dp = Array.from({ length: n }, () => Array(m).fill(0));
let maxSize = 0;

// DP 배열 채우기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === 1) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1; // 첫 행이나 첫 열의 경우
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  // 최대 정사각형 크기 갱신
  maxSize = Math.max(maxSize, ...dp[i]);
}

// 정사각형의 크기 출력
console.log(maxSize * maxSize);
