const fs = require('fs');
const board = fs.readFileSync(0).toString().trim().split('\n').map(item => item.split(' ').map(Number));

function isValid(row, col, num) {
  // 행 검사
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
  }
  // 열 검사
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
  }
  // 3x3 박스 검사
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

function solve() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(row, col, num)) {
            board[row][col] = num;
            if (solve()) return true;
            board[row][col] = 0; // 되돌리기
          }
        }
        return false; // 어떤 숫자도 넣을 수 없음 → 백트래킹
      }
    }
  }
  return true; // 모든 칸 채움
}

solve();

board.forEach(row => console.log(row.join(" ")));