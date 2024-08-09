/**
 * 안전 영역
 */

let [N, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');
N = +N;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(i, j) {
  let q = [[i, j]];
  check[i][j] = true;
  while (q.length) {
    const [y, x] = q.shift();
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < N &&
        !check[ny][nx] &&
        board[ny][nx] > h
      ) {
        check[ny][nx] = true;
        q.push([ny, nx]);
      }
    }
  }
  return 1;
}

let board = input.map((e) => e.split(' ').map(Number));
let check = Array.from(Array(N), () => Array(N).fill(false));
let max = 0;

let h = -1;
while (true) {
  h++;
  let protect = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!check[i][j] && board[i][j] > h) {
        protect += bfs(i, j);
      }
    }
  }

  max = Math.max(max, protect);
  check = Array.from(Array(N), () => Array(+N).fill(false));
  if (!protect) break;
}

console.log(max);
