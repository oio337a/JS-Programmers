/**
 * 나는야 포켓몬 마스터 이다솜
 *
 */

const [NM, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

const [N, M] = NM.split(' ').map(Number);

let dogam = new Map();
for (let i = 0; i < N; i++) {
  dogam.set(input[i], i + 1);
  dogam.set(i + 1 + '', input[i]);
}
for (let j = N; j < N + M; j++) {
  console.log(dogam.get(input[j]));
}
