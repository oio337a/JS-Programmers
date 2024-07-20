/**
 * 수강신청
 */

const [KL, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

const [K, L] = KL.split(' ').map(Number);

console.log([...new Set(input.reverse())].reverse().slice(0, K).join('\n'));
