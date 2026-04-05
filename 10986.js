const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let prefix = 0;
const count = new Array(M).fill(0);
let result = 0;

// 누적합을 돌면서 나머지 카운트
for (let i = 0; i < N; i++) {
  prefix = (prefix + arr[i]) % M;
  count[prefix]++;
  if (prefix === 0) result++; // 시작부터 나누어 떨어지는 경우
}

// 같은 나머지끼리 조합 계산
for (let i = 0; i < M; i++) {
  if (count[i] > 1) {
    result += (count[i] * (count[i] - 1)) / 2;
  }
}

console.log(result);