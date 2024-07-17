/**
 * 로프
 */

const [N, ...rope] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let answer = Math.max(...rope.sort((a, b) => b - a));

for (let i = 1; i < N; i++) {
  const temp = rope[i] * (i + 1);
  if (answer < temp) answer = temp;
}

console.log(answer);
