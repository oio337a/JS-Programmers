const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0], 10);
const balls = input[1];

let redCount = 0;
let blueCount = 0;

// 1. 전체 빨간 공, 파란 공 개수 세기
for (let i = 0; i < N; i++) {
  if (balls[i] === 'R') {
    redCount++;
  } else {
    blueCount++;
  }
}

let minMoves = Infinity;

// --- 경우의 수 계산 ---

// 1. 빨간 공을 왼쪽으로 모으기
let leftRedStreak = 0;
for (let i = 0; i < N; i++) {
  if (balls[i] === 'R') {
    leftRedStreak++;
  } else {
    break; // 연속이 끊기면 중단
  }
}
minMoves = Math.min(minMoves, redCount - leftRedStreak);


// 2. 빨간 공을 오른쪽으로 모으기
let rightRedStreak = 0;
for (let i = N - 1; i >= 0; i--) {
  if (balls[i] === 'R') {
    rightRedStreak++;
  } else {
    break;
  }
}
minMoves = Math.min(minMoves, redCount - rightRedStreak);


// 3. 파란 공을 왼쪽으로 모으기
let leftBlueStreak = 0;
for (let i = 0; i < N; i++) {
  if (balls[i] === 'B') {
    leftBlueStreak++;
  } else {
    break;
  }
}
minMoves = Math.min(minMoves, blueCount - leftBlueStreak);


// 4. 파란 공을 오른쪽으로 모으기
let rightBlueStreak = 0;
for (let i = N - 1; i >= 0; i--) {
  if (balls[i] === 'B') {
    rightBlueStreak++;
  } else {
    break;
  }
}
minMoves = Math.min(minMoves, blueCount - rightBlueStreak);


console.log(minMoves);