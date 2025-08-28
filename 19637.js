const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const [N, _] = input[0].split(' ').map(Number);

// 칭호와 전투력 배열 분리
const titles = [];
const powers = [];

for (let i = 1; i <= N; i++) {
  const [title, power] = input[i].split(' ');
  titles.push(title);
  powers.push(Number(power));
}

const targets = input.slice(N + 1).map(Number);
const answer = [];

// 이분 탐색 (upper_bound)
function findTitle(val) {
  let left = 0;
  let right = N - 1;
  let res = N - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (val <= powers[mid]) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return titles[res];
}

for (let t of targets) {
  answer.push(findTitle(t));
}

console.log(answer.join('\n'));
