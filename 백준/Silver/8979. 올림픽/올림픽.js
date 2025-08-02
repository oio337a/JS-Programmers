const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const scores = input.slice(1).map(line => line.split(' ').map(Number));

const target = scores.find(([nation]) => nation === K);
let answer = 1;

for (let i = 0; i < N; i++) {
    const [_, g, s, b] = scores[i];

    if (
        g > target[1] ||
        (g === target[1] && s > target[2]) ||
        (g === target[1] && s === target[2] && b > target[3])
    ) {
        answer++;
    }
}

console.log(answer);
