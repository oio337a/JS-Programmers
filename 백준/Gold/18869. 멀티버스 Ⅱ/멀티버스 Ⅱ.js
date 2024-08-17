/**
 * 멀티버스 Ⅱ
 */

// 틀린 코드
// const fs = require('fs');
// const input = fs.readFileSync(0).toString().trim().split('\n');

// const [M, N] = input[0].split(' ').map(Number);
// const list = input.slice(1).map((line) =>
//   line
//     .split(' ')
//     .map((e, i) => [i, +e])
//     .sort((a, b) => a[1] - b[1])
// );

// let temp = list.map((line) => line.reduce((a, c) => a + c[0], ''));

// let table = new Map();
// let answer = 0;
// temp.forEach((e) => {
//   if (table.has(e)) {
//     table.set(e, table.get(e) + 1);
//     if (table.get(e) % 2 === 0) answer++;
//   } else {
//     table.set(e, 1);
//   }
// });

// console.log(answer);

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const universes = input.slice(1).map((line) => line.split(' ').map(Number));

function getRankArray(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const rankMap = new Map();

  sorted.forEach((value, index) => {
    if (!rankMap.has(value)) {
      rankMap.set(value, index);
    }
  });

  return arr.map((value) => rankMap.get(value));
}

let universeRanks = universes.map(getRankArray);
let count = 0;

for (let i = 0; i < M - 1; i++) {
  for (let j = i + 1; j < M; j++) {
    if (
      universeRanks[i].every((val, index) => val === universeRanks[j][index])
    ) {
      count++;
    }
  }
}

console.log(count);
