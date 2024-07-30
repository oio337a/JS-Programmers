/**
 * 구슬 찾기
 * 보다: 가벼운, 무거운
 * 1: [[], [2, 5, 4]]
 * 2: [[1], [4]]
 * 3: [[], [4]]
 * 4: [[3, 2, 1], []]
 * 5: [[1], []]
 * 
 * 무거운 것을 찾으면 그것보다 가벼운 것이 있으면 현재 것 또한 무겁고 가볍다.
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const heavy = Array.from({ length: N + 1 }, () => []);
const light = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  heavy[a].push(b);
  light[b].push(a);
}

function dfs(start, graph) {
  const stack = [start];
  const visited = new Array(N + 1).fill(false);
  visited[start] = true;
  let count = 0;

  while (stack.length) {
    const node = stack.pop();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
        count++;
      }
    }
  }

  return count;
}

let answer = 0;
const half = Math.floor(N / 2);

for (let i = 1; i <= N; i++) {
  const heavyCount = dfs(i, heavy);
  const lightCount = dfs(i, light);

  if (heavyCount > half || lightCount > half) {
    answer++;
  }
}

console.log(answer);
