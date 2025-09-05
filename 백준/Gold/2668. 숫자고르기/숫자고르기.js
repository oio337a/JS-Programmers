const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = [0, ...input.slice(1).map(Number)]; // 1-indexed
const indegree = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  indegree[arr[i]]++;
}

const queue = [];
const removed = Array(N + 1).fill(false);

// 진입차수가 0인 노드 큐에 넣기
for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
    removed[i] = true;
  }
}

// 위상정렬처럼 제거 진행
while (queue.length) {
  const node = queue.shift();
  const next = arr[node];
  indegree[next]--;
  if (indegree[next] === 0 && !removed[next]) {
    queue.push(next);
    removed[next] = true;
  }
}

// 사이클에 남은 노드들이 정답
const result = [];
for (let i = 1; i <= N; i++) {
  if (!removed[i]) result.push(i);
}

console.log(result.length);
console.log(result.join("\n"));
