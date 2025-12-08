// 문제 풀이 방법
// 2차원 배열을 순회하며 가로와 세로에 대해 탐색을 한다.
// 가로와 세로에 대해 탐색을 할 때, 빈 칸이 연속으로 2개 이상 있는지 확인한다.
// 빈 칸이 연속으로 2개 이상 있으면 누울 수 있는 자리의 개수를 증가시킨다.

const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const N = Number(input[0])
const board = input.slice(1).map(e => e.split(''))

// 가로와 세로의 개수를 저장할 변수
let row = 0
let col = 0

// board를 순회하며 가로와 세로에 대해 탐색을 한다.
// 시간복잡도 O(N^2) N의 범위는 100이하이므로 완전탐색으로 풀 수 있다.
// 가로
for (let i = 0; i < N; i++) {
    let cnt = 0
    for (let j = 0; j < N; j++) {
        if (board[i][j] === '.') {
            cnt++;
        }
        else {
            if (cnt >= 2) row++;
            cnt = 0;
        }
    }
    if (cnt >= 2) row++;
}

// 세로
for (let i = 0; i < N; i++) {
    let cnt = 0
    for (let j = 0; j < N; j++) {
        if (board[j][i] === '.') {
            cnt++;
        }
        else {
            if (cnt >= 2) col++;
            cnt = 0;
        }
    }
    if (cnt >= 2) col++;
}

console.log(row, col);