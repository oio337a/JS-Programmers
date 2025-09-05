const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

function checkWin(board, ch) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winLines.some(line => line.every(i => board[i] === ch));
}

for (const line of input) {
  if (line === "end") break;

  const board = line.split("");
  const xCount = board.filter(c => c === "X").length;
  const oCount = board.filter(c => c === "O").length;

  const xWin = checkWin(board, "X");
  const oWin = checkWin(board, "O");

  let valid = false;

  // 1. 말 개수 기본 조건
  if (!(xCount === oCount || xCount === oCount + 1)) {
    console.log("invalid");
    continue;
  }

  // 2. 승리 조건
  if (xWin && oWin) {
    valid = false;
  } else if (xWin && xCount === oCount + 1) {
    valid = true;
  } else if (oWin && xCount === oCount) {
    valid = true;
  } else if (!xWin && !oWin && xCount + oCount === 9) {
    valid = true;
  }

  console.log(valid ? "valid" : "invalid");
}
