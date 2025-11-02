const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const puddles = [];
for (let i = 1; i <= N; i++) {
  puddles.push(input[i].split(' ').map(Number));
}

// 1. 웅덩이를 시작 위치 기준으로 오름차순 정렬
puddles.sort((a, b) => a[0] - b[0]);

let answer = 0;
let currentPos = 0; // 널빤지가 마지막으로 덮은 위치

// 2. 널빤지 설치
for (let i = 0; i < N; i++) {
  const [start, end] = puddles[i];

  // 널빤지를 깔기 시작해야 하는 위치
  // 이미 덮인 부분은 건너뜀
  currentPos = Math.max(currentPos, start);

  // 웅덩이의 끝(end)을 덮을 때까지 널빤지를 깐다
  while (currentPos < end) {
    currentPos += L; // 널빤지 길이(L)만큼 전진
    answer++;        // 널빤지 개수 증가
  }
}

console.log(answer);