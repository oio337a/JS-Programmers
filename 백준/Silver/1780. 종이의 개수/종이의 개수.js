const fs = require('fs');

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const result = [0, 0, 0]; // [-1, 0, 1] 개수 저장용

function solution(i, j, d) {
    const color = board[i][j];

    for (let it = i; it < i + d; it++) {
        for (let jt = j; jt < j + d; jt++) {
            if (color !== board[it][jt]) {
                const newd = Math.floor(d / 3);

                for (let mi = 0; mi < 3; mi++) {
                    for (let mj = 0; mj < 3; mj++) {
                        solution(i + mi * newd, j + mj * newd, newd);
                    }
                }
                return;
            }
        }
    }

    // color 값이 -1, 0, 1 이므로 index 맞추기 위해 +1
    result[color + 1]++;
}

solution(0, 0, n);

// 출력 (-1, 0, 1 순서)
for (let i = 0; i < 3; i++) {
    console.log(result[i]);
}