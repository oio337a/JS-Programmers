const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((e) => parseInt(e));

let board = [];
let chicken = [];
let home = [];
let result = Infinity;

for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map((e) => +e);
  for (let j = 0; j < n; j++) {
    if (row[j] === 1) home.push([i - 1, j]);
    else if (row[j] === 2) chicken.push([i - 1, j]);
  }
  board.push(row);
}

const calcul_distanse = (left_chicken) => {
  let totalChickenLength = 0;
  for (let i = 0; i < home.length; i++) {
    let chickenLength = Infinity;
    for (let j = 0; j < left_chicken.length; j++) {
      chickenLength = Math.min(
        chickenLength,
        Math.abs(home[i][0] - left_chicken[j][0]) +
          Math.abs(home[i][1] - left_chicken[j][1])
      );
    }
    totalChickenLength += chickenLength;
  }
  return totalChickenLength;
};

const dfs = (depth, idx, left_chicken) => {
  if (depth === m) {
    result = Math.min(result, calcul_distanse(left_chicken));
    return;
  }
  if (idx === chicken.length) return;

  left_chicken.push(chicken[idx]);
  dfs(depth + 1, idx + 1, left_chicken);
  left_chicken.pop();

  dfs(depth, idx + 1, left_chicken);
};

dfs(0, 0, []);

console.log(result);
