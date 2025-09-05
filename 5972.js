const fs = require("fs");
const input = fs.readFileSync('test.txt').toString().trim().split("\r\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

// 최소 힙 (Priority Queue)
class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }
  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent][0] <= this.heap[idx][0]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === idx) break;
      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      idx = smallest;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

// 다익스트라
const dist = Array(N + 1).fill(Infinity);
dist[1] = 0;

const pq = new MinHeap();
pq.push([0, 1]); // [거리, 노드]

while (!pq.isEmpty()) {
  const [d, now] = pq.pop();
  if (dist[now] < d) continue;

  for (const [next, cost] of graph[now]) {
    const nd = d + cost;
    if (nd < dist[next]) {
      dist[next] = nd;
      pq.push([nd, next]);
    }
  }
}

console.log(dist[N]);
