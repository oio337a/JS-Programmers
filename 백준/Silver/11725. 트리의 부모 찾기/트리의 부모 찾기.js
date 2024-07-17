const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = +input[0];

let node = Array.from(Array(N + 1), () => []);
let visited = new Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  [a, b] = input[i].split(' ').map(Number);
  node[a].push(b);
  node[b].push(a);
}

// function bfs(v) {
//   let q = [];
//   q.push(v);
//   while (q.length) {
//     v = q.shift();
//     for (i of node[v]) {
//       if (!visited[i]) {
//         visited[i] = v;
//         q.push(i);
//       }
//     }
//   }
// }

// bfs(1);

function find(v) {
  for (i of node[v]) {
    if (!visited[i]) {
      visited[i] = v;
      find(i);
    }
  }
}

find(1);
let answer = '';
for (let i = 2; i <= N; i++) answer += visited[i] + '\n';
console.log(answer);
