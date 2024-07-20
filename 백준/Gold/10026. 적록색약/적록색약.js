/**
 * 적록색약
 */

const [N, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

let board = new Array();
let board1 = new Array();
for (let i = 0; i < N; i++) {
  board.push(input[i].split(''));
  board1.push(input[i].replaceAll('R', 'G').split(''));
}

function bfs(map, color, y, x) {
  let q = [[y, x]];
  map[y][x] = 1;
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  while (q.length) {
    [y, x] = q.shift();
    for (let i = 0; i < 4; i++) {
      [ny, nx] = [y + dy[i], x + dx[i]];
      if (0 <= ny && ny < N && 0 <= nx && nx < N && map[ny][nx] === color) {
        q.push([ny, nx]);
        map[ny][nx] = 1;
      }
    }
  }
  return 1;
}

let answer = [0, 0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (isNaN(board[i][j])) answer[0] += bfs(board, board[i][j], i, j);
    if (isNaN(board1[i][j])) answer[1] += bfs(board1, board1[i][j], i, j);
  }
}

console.log(answer.join(' '));
