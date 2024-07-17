/**
 * 보물
 */

const [N, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

let A = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let B = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

console.log(A.reduce((a, c, i) => a + c * B[i], 0));
