const [N, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

let node = new Map();
for (let i = 0; i < N; i++) {
  [leaf, left, right] = input[i].split(' ');
  node.set(leaf, [left, right]);
}

let answer = [];
function 전(v) {
  if (v === '.') return;
  answer.push(v);
  전(node.get(v)[0]);
  전(node.get(v)[1]);
}
전('A');
console.log(answer.join(''));
answer = [];

function 중(v) {
  if (v === '.') return;
  중(node.get(v)[0]);
  answer.push(v);
  중(node.get(v)[1]);
}
중('A');
console.log(answer.join(''));
answer = [];

function 후(v) {
  if (v === '.') return;
  후(node.get(v)[0]);
  후(node.get(v)[1]);
  answer.push(v);
}

후('A');
console.log(answer.join(''));
