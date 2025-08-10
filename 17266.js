const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const positions = input[2].split(' ').map(Number).sort((a, b) => a - b);

let left = 0;
let right = N;
let answer = N;

function isPossible(X) {
    let prev = 0; // 시작점
    for (let i = 0; i < M; i++) {
        const start = positions[i] - X;
        const end = positions[i] + X;

        if (start > prev) return false; // 중간에 어두운 부분 있음
        prev = end;
    }
    return prev >= N;
}

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
        answer = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(answer);
