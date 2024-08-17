/**
 * 선 긋기
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const lines = input.slice(1).map((line) => line.split(' ').map(Number));

// 선분을 시작점을 기준으로 오름차순, 시작점이 같으면 끝점을 기준으로 오름차순 정렬
lines.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let start = lines[0][0];
let end = lines[0][1];
let totalLength = 0;

for (let i = 1; i < N; i++) {
  const [nextStart, nextEnd] = lines[i];

  if (nextStart <= end) {
    // 현재 선분이 이전 선분과 겹칠 경우, 끝점을 연장
    end = Math.max(end, nextEnd);
  } else {
    // 겹치지 않을 경우, 이전 선분의 길이를 더하고 새로운 선분을 시작
    totalLength += end - start;
    start = nextStart;
    end = nextEnd;
  }
}

// 마지막으로 남은 선분의 길이 더하기
totalLength += end - start;

console.log(totalLength);
