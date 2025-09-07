const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const start = input[1].split("").map(Number);
const goal = input[2].split("").map(Number);

function flip(arr, i) {
  if (i > 0) arr[i - 1] ^= 1;
  arr[i] ^= 1;
  if (i < N - 1) arr[i + 1] ^= 1;
}

function solve(first) {
  const bulbs = start.slice();
  let count = 0;

  if (first) {
    flip(bulbs, 0);
    count++;
  }

  for (let i = 1; i < N; i++) {
    if (bulbs[i - 1] !== goal[i - 1]) {
      flip(bulbs, i);
      count++;
    }
  }

  if (bulbs.join("") === goal.join("")) return count;
  return Infinity; // 불가능
}

const res = Math.min(solve(false), solve(true));
console.log(res === Infinity ? -1 : res);
