/**
 * 바이러스
 */

const { Z_NO_COMPRESSION } = require('zlib');

const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = +input[0];
const M = +input[1];
let node = Array.from(Array(N + 1), () => []);
let visited = new Array(N + 1).fill(false);
for (let i = 2; i < M + 2; i++) {
  [a, b] = input[i].split(' ').map(Number);
  node[a].push(b);
  node[b].push(a);
}

function dfs(v) {
  visited[v] = true;
  for (i of node[v]) {
    if (!visited[i]) dfs(i);
  }
}

dfs(1);
console.log(visited.filter((e) => e).length - 1);
