const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let idx = 0
let T = Number(input[idx++])

while(T--) {
    const n = Number(input[idx++])
    const board = input.slice(idx, idx + 2).map(val => val.split(' ').map(Number))
    idx += 2

    if (n > 1) {
        board[0][1] += board[1][0]
        board[1][1] += board[0][0]
    }
    for (let i = 2; i < n; i++) {
        board[0][i] += Math.max(board[1][i - 1], board[1][i - 2])
        board[1][i] += Math.max(board[0][i - 1], board[0][i - 2])
    }

    console.log(Math.max(board[0][n - 1], board[1][n - 1]))
}