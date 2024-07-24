/**
 * Puyo Puyo
 *
 */

let board = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(''));
let visit = Array.from({ length: 12 }, () => new Array(6).fill(0));
let cnt = 0;
let flag = 0;

function search(i, j, c) {
  visit[i][j] = 1;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let q = [[i, j]];
  let record = [[i, j]];
  let count = 1;
  while (q.length) {
    [y, x] = q.shift();
    for (let k = 0; k < 4; k++) {
      [ny, nx] = [y + dy[k], x + dx[k]];
      if (
        0 <= nx &&
        nx < 6 &&
        0 <= ny &&
        ny < 12 &&
        !visit[ny][nx] &&
        board[ny][nx] === c
      ) {
        q.push([ny, nx]);
        record.push([ny, nx]);
        visit[ny][nx] = 1;
        count++;
      }
    }
  }
  if (count < 4) {
    for ([yy, xx] of record) {
      visit[yy][xx] = 0;
    }
    return 0;
  }
  return 1;
}

function boom() {
  let check = Array.from({ length: 6 }, () => []);
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (visit[i][j]) {
        visit[i][j] = 0;
        board[i][j] = '.';
      } else {
        if (board[i][j] !== '.') check[j].push(board[i][j]);
      }
    }
  }
  check.map((e, i) => check[i].unshift(...'.'.repeat(12 - e.length).split('')));
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 12; j++) {
      board[j][i] = check[i][j];
    }
  }
}

while (true) {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if ((board[i][j] !== '.' || board[i][j] === undefined) && !visit[i][j]) {
        flag += search(i, j, board[i][j]);
      }
    }
  }
  boom();
  if (!flag) break;
  flag = 0;
  cnt++;
}

console.log(cnt);
