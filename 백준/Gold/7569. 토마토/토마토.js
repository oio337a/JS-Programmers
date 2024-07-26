const fs = require('fs');
const [MNH, ...input] = fs.readFileSync(0).toString().trim().split('\n');

const [M, N, H] = MNH.split(' ').map(Number);

let board = [];
let q = [];
let line = 0;

for (let i = 0; i < H; i++) {
  let layer = [];
  for (let j = 0; j < N; j++) {
    let row = input[line++].split(' ').map(Number);
    layer.push(row);
    for (let k = 0; k < M; k++) {
      if (row[k] === 1) q.push([i, j, k, 0]);
    }
  }
  board.push(layer);
}

const dz = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dx = [0, 0, 0, 0, 1, -1];

function bfs() {
  let idx = 0;
  let cnt = 0; // cnt 변수를 bfs 함수 내부에서 선언하고 반환
  while (idx < q.length) {
    let [z, y, x, currentCnt] = q[idx++];
    cnt = currentCnt; // 현재 cnt 업데이트
    for (let i = 0; i < 6; i++) {
      let nz = z + dz[i], ny = y + dy[i], nx = x + dx[i];
      if (
        0 <= nz && nz < H &&
        0 <= ny && ny < N &&
        0 <= nx && nx < M &&
        board[nz][ny][nx] === 0
      ) {
        board[nz][ny][nx] = 1;
        q.push([nz, ny, nx, cnt + 1]);
      }
    }
  }
  return cnt; // 최종 cnt 값을 반환
}

let answer = bfs();

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j].includes(0)) {
      answer = -1;
      break;
    }
  }
  if (answer === -1) break;
}

console.log(answer);
