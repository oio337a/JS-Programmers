/**
 * 트리
 */

const input = require('fs').readFileSync(0).toString().trim().split('\n');

let line = 0;
let testCase = 1;

while (true) {
  const [n, m] = input[line].split(' ').map(Number);
  if (n === 0 && m === 0) break;

  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    const [x, y] = input[line + 1 + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  const visited = Array(n + 1).fill(false);
  let treeCount = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i] && !hasCycle(i, -1, visited, graph)) {
      treeCount++;
    }
  }

  if (treeCount > 1) {
    console.log(`Case ${testCase}: A forest of ${treeCount} trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: No trees.`);
  }

  line += m + 1;
  testCase++;
}

function hasCycle(node, parent, visited, graph) {
  visited[node] = true;

  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      if (hasCycle(neighbor, node, visited, graph)) {
        return true;
      }
    } else if (neighbor !== parent) {
      return true;
    }
  }

  return false;
}
