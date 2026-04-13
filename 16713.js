const fs = require("fs");
let [NQ, list, ...range] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, Q] = NQ.split(" ").map(Number);
list = list.split(" ").map(Number);
range = range.map((item) => item.split(" ").map(Number));

const diff = Array(N + 2).fill(0);

// 차분 배열에 쿼리 반영
for (let [l, r] of range) {
  diff[l] += 1;
  diff[r + 1] -= 1;
}

// 누적합으로 각 인덱스 포함 횟수 계산
const cnt = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  cnt[i] = cnt[i - 1] + diff[i];
}

// 최종 XOR 계산
let result = 0;
for (let i = 1; i <= N; i++) {
  if (cnt[i] % 2 === 1) {
    result ^= list[i - 1];
  }
}

console.log(result);