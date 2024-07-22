/**
 * 덱
 */

const [N, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

let deque = [];
let answer = [];
let l = 0;
for (let i = 0; i < N; i++) {
  [command, cnt] = input[i].split(' ');
  switch (command) {
    case 'push_front':
      deque.unshift(+cnt);
      l++;
      break;
    case 'push_back':
      deque.push(+cnt);
      l++;
      break;
    case 'pop_front':
      answer.push(l ? deque.shift() : -1);
      l--;
      l = l < 0 ? 0 : l;
      break;
    case 'pop_back':
      answer.push(l ? deque.pop() : -1);
      l--;
      l = l < 0 ? 0 : l;
      break;
    case 'size':
      answer.push(l);
      break;
    case 'empty':
      answer.push(l ? 0 : 1);
      break;
    case 'front':
      answer.push(l ? deque[0] : -1);
      break;
    case 'back':
      answer.push(l ? deque[l - 1] : -1);
      break;
  }
}
console.log(answer.join('\n'));
