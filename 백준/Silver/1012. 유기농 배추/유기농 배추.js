/**
 * 유기농 배추
 */

let [T, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

while (T--) {
  function bfs(i, j) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    let q = [[i, j]];
    board[i][j] = 2;
    while (q.length) {
      [y, x] = q.shift();
      for (let k = 0; k < 4; k++) {
        [ny, nx] = [y + dy[k], x + dx[k]];
        if (0 <= ny && ny < N && 0 <= nx && nx < M && board[ny][nx] === 1) {
          q.push([ny, nx]);
          board[ny][nx] = 2;
        }
      }
    }
    return 1;
  }

  [M, N, K] = input.shift().split(' ').map(Number);
  let board = Array.from(Array(N), () => Array(M).fill(0));
  for (let i = 0; i < K; i++) {
    [x, y] = input.shift().split(' ').map(Number);
    board[y][x] = 1;
  }
  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) answer += bfs(i, j);
    }
  }
  console.log(answer);
}
