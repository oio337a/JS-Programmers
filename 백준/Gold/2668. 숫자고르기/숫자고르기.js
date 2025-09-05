const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = [0, ...input.slice(1).map(Number)];
const result = [];
const visited = Array(N + 1).fill(false);

function dfs(start, current, path) {
  if (!visited[current]) {
    visited[current] = true;
    path.push(current);
    dfs(start, arr[current], path);
  } else {
    // 사이클인지 확인
    if (current === start) {
      result.push(...path);
    }
  }
}

for (let i = 1; i <= N; i++) {
  visited.fill(false); // 매번 방문 초기화
  dfs(i, i, []);
}

const unique = [...new Set(result)].sort((a, b) => a - b);

console.log(unique.length);
console.log(unique.join("\n"));
