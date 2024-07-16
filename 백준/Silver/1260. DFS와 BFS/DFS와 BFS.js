const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);

let node = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let visited = new Array(N + 1).fill(false);
let answer = [];

for (let i = 1; i <= M; i++) {
  [a, b] = input[i].split(' ').map(Number);
  node[a][b] = 1;
  node[b][a] = 1;
}

function dfs(visited, v) {
  visited[v] = true;
  answer.push(v);
  for (let i = 1; i < N + 1; i++) {
    if (!visited[i] && node[v][i]) dfs(visited, i);
  }
}

function bfs(visited, v) {
  let q = [];
  q.push(v);
  visited[v] = true;
  while (q.length) {
    v = q.shift();
    answer.push(v);
    for (let i = 1; i < N + 1; i++) {
      if (visited[i] === false && node[v][i] === 1) {
        q.push(i);
        visited[i] = 1;
      }
    }
  }
}

dfs(visited, V);
console.log(answer.join(' '));
answer = [];
visited = new Array(N + 1).fill(false);
bfs(visited, V);
console.log(answer.join(' '));
