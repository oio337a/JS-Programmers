const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');
const N = Number(input[0]);
const heights = input[1].split(' ').map(Number);

const result = new Array(N).fill(0);
const stack = []; // [height, index]

for (let i = 0; i < N; i++) {
  const h = heights[i];

  // 현재 탑보다 낮은 탑은 스택에서 제거
  while (stack.length && stack[stack.length - 1][0] < h) {
    stack.pop();
  }

  // 스택이 비어있지 않으면, 맨 위 탑이 신호 수신
  if (stack.length) {
    result[i] = stack[stack.length - 1][1] + 1; // 인덱스는 1-based
  } else {
    result[i] = 0;
  }

  // 현재 탑 스택에 추가
  stack.push([h, i]);
}

console.log(result.join(' '));
