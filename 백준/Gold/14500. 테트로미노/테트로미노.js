/**
 * 테트로미노
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(' ').map(Number));

let result = 0;
const dy = [-1, 1, 0, 0]; // 상하좌우
const dx = [0, 0, -1, 1]; // 상하좌우

function dfs(y, x, cnt, sum, visited) {
  if (cnt === 4) {
    result = Math.max(result, sum);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx]) {
      visited[ny][nx] = true;
      dfs(ny, nx, cnt + 1, sum + board[ny][nx], visited);
      visited[ny][nx] = false;
    }
  }
}

function checkSpecialShape(y, x) {
  // ㅗ 모양의 4가지 경우를 처리
  if (y > 0 && y < N - 1 && x > 0) {
    const sum =
      board[y][x] + board[y - 1][x] + board[y + 1][x] + board[y][x - 1];
    result = Math.max(result, sum);
  }
  if (y > 0 && y < N - 1 && x < M - 1) {
    const sum =
      board[y][x] + board[y - 1][x] + board[y + 1][x] + board[y][x + 1];
    result = Math.max(result, sum);
  }
  if (y > 0 && x > 0 && x < M - 1) {
    const sum =
      board[y][x] + board[y - 1][x] + board[y][x - 1] + board[y][x + 1];
    result = Math.max(result, sum);
  }
  if (y < N - 1 && x > 0 && x < M - 1) {
    const sum =
      board[y][x] + board[y + 1][x] + board[y][x - 1] + board[y][x + 1];
    result = Math.max(result, sum);
  }
}

function solve() {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      dfs(i, j, 1, board[i][j], visited);
      visited[i][j] = false;
      checkSpecialShape(i, j);
    }
  }

  console.log(result);
}

solve();
