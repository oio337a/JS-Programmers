const fs = require('fs');

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);

// 높이가 최대 1e9 이상일 수 있으므로 BigInt 사용
const heights = [];
for (let i = 0; i < N; i++) {
    heights.push(BigInt(input[i + 1]));
}

const stack = [];
let max = 0n;

for (let i = 0; i <= N; i++) {
    const curr = (i === N ? 0n : heights[i]);

    // 현재 높이보다 크거나 같은 막대 pop
    while (stack.length && heights[stack[stack.length - 1]] >= curr) {
        const idx = stack.pop();
        const h = heights[idx];

        const left = stack.length === 0 ? -1 : stack[stack.length - 1];
        const width = BigInt(i - left - 1);
        const area = h * width;

        if (area > max) max = area;
    }

    stack.push(i);
}

console.log(max.toString());