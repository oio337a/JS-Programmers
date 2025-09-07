const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const buildings = input.slice(1).map(line => line.split(" ").map(Number));

let stack = [];
let count = 0;

for (let i = 0; i < N; i++) {
  let [x, h] = buildings[i];

  while (stack.length > 0 && stack[stack.length - 1] > h) {
    stack.pop();
    count++;
  }

  if (stack.length === 0 || stack[stack.length - 1] < h) {
    if (h > 0) stack.push(h);
  }
}

// 남은 스택 처리
count += stack.length;

console.log(count);
