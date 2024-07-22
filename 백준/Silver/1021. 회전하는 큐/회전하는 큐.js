/**
 * 회전하는 큐
 */

const [[N, M], targets] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

let answer = 0;
let arr = new Array(N).fill(1).map((e, i) => e + i);
for (let target of targets) {
  while (true) {
    if (arr[0] === target) {
      arr.shift();
      break;
    } else {
      if (arr.indexOf(target) < arr.length / 2) {
        while (arr[0] !== target) {
          arr.push(arr.shift());
          answer++;
        }
      } else {
        while (arr[0] !== target) {
          arr.unshift(arr.pop());
          answer++;
        }
      }
    }
  }
}

console.log(answer);
