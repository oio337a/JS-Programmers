const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
let tc = 1;
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

while (true) {
  const N = Number(input[idx++]);
  if (N === 0) break;

  const cave = [];
  for (let i = 0; i < N; i++) {
    cave.push(input[idx++].split(" ").map(Number));
  }

  // 다익스트라
  const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
  dist[0][0] = cave[0][0];

  // 우선순위 큐 (min-heap)
  const pq = [[cave[0][0], 0, 0]]; // [cost, r, c]

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]); // JS는 heap 없으니 sort로 (N=125라 괜찮음)
    const [cost, r, c] = pq.shift();

    if (cost > dist[r][c]) continue;
    if (r === N - 1 && c === N - 1) break;

    for (let d = 0; d < 4; d++) {
      const nr = r + dr[d];
      const nc = c + dc[d];
      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

      const newCost = cost + cave[nr][nc];
      if (newCost < dist[nr][nc]) {
        dist[nr][nc] = newCost;
        pq.push([newCost, nr, nc]);
      }
    }
  }

  console.log(`Problem ${tc++}: ${dist[N - 1][N - 1]}`);
}
