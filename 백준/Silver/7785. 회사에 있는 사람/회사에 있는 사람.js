/**
 * 회에 있는 사람
 */

const [N, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

let check = new Map();

for (let i = 0; i < N; i++) {
  [name, tag] = input[i].split(' ');
  tag === 'enter' ? check.set(name, 1) : check.delete(name);
}

console.log([...check.keys()].sort().reverse().join('\n'));
