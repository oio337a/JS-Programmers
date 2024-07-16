const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((e) => +e);

let node = Array.from(Array(n + 1), () => []);
let visited = new Array(n + 1).fill(false);
let answer = 0;

for (let i = 0; i < m; i++) {
  [a, b] = input[i + 1].split(' ').map((e) => +e);
  node[a].push(b);
  node[b].push(a);
}

function dfs(visited, v) {
  visited[v] = true;
  for (i of node[v]) {
    if (!visited[i]) {
      dfs(visited, i);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(visited, i);
    answer++;
  }
}
console.log(answer);
