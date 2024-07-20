/**
 * 수 고르기
 */

const [NM, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);
let li = input.map(Number);

let [s, e] = [0, 0];
li.sort((a, b) => a - b);
let answer = Infinity;
while (s <= e && e < N) {
  const num = Math.abs(li[e] - li[s]);
  if (num < M) {
    e++;
  } else {
    answer = Math.min(answer, num);
    s++;
  }
  if (num === M) break;
}

console.log(answer);
