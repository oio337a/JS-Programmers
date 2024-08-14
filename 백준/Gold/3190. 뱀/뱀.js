/**
 * 뱀
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const K = parseInt(input[1]);

const board = Array.from({ length: N }, () => Array(N).fill(0));
for (let i = 2; i < 2 + K; i++) {
  const [r, c] = input[i].split(' ').map(Number);
  board[r - 1][c - 1] = 1; // 사과 위치
}

const L = parseInt(input[2 + K]);
const directions = [];
for (let i = 3 + K; i < 3 + K + L; i++) {
  const [X, C] = input[i].split(' ');
  directions.push([parseInt(X), C]);
}

// 방향: 우, 하, 좌, 상
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

let time = 0;
let dir = 0; // 현재 방향 (처음에 오른쪽)
let snake = [[0, 0]]; // 뱀의 위치 (처음에 머리 위치)
board[0][0] = 2; // 뱀의 몸

let dirIndex = 0;

function isCollision(nr, nc) {
  return nr < 0 || nc < 0 || nr >= N || nc >= N || board[nr][nc] === 2;
}

while (true) {
  time++;

  const [headR, headC] = snake[0];
  const newHeadR = headR + dr[dir];
  const newHeadC = headC + dc[dir];

  if (isCollision(newHeadR, newHeadC)) break;

  // 사과가 없는 경우, 꼬리 제거
  if (board[newHeadR][newHeadC] !== 1) {
    const [tailR, tailC] = snake.pop();
    board[tailR][tailC] = 0;
  }

  // 새로운 머리 위치에 뱀 이동
  snake.unshift([newHeadR, newHeadC]);
  board[newHeadR][newHeadC] = 2;

  // 방향 전환
  if (dirIndex < directions.length && time === directions[dirIndex][0]) {
    const turn = directions[dirIndex][1];
    if (turn === 'L') {
      dir = (dir + 3) % 4; // 왼쪽 회전
    } else {
      dir = (dir + 1) % 4; // 오른쪽 회전
    }
    dirIndex++;
  }
}

console.log(time);
