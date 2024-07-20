/**
 * 부분합
 */

const [NS, input] = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, S] = NS.split(' ').map(Number);
let li = input.split(' ').map(Number);
let arr = [0];

for (i of li) {
  arr.push(arr[arr.length - 1] + i);
}
let [s, e] = [0, 0];
let answer = Infinity;
while (s <= e && e < N + 1) {
  const cur = arr[e] - arr[s];
  if (cur < S) {
    e++;
  } else {
    answer = Math.min(answer, e - s);
    s++;
  }
}

console.log(answer === Infinity ? 0 : answer);
