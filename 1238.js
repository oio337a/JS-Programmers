const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 우선순위 큐 (최소 힙) 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  // ... (이하 MinHeap 구현은 아래 코드 블록과 동일)
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  
  push(node) {
    this.heap.push(node);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      parentIndex >= 0 &&
      this.heap[currentIndex].cost < this.heap[parentIndex].cost
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (true) {
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallestIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].cost < this.heap[smallestIndex].cost
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].cost < this.heap[smallestIndex].cost
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === currentIndex) {
        break;
      }
      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }
    return minNode;
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
}

const [N, M, X] = input[0].split(' ').map(Number);
const adj = Array.from({ length: N + 1 }, () => []);
const reverseAdj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [start, end, time] = input[i].split(' ').map(Number);
  adj[start].push({ node: end, cost: time });
  reverseAdj[end].push({ node: start, cost: time });
}

// 다익스트라 함수
function dijkstra(start, graph) {
  const distances = Array(N + 1).fill(Infinity);
  distances[start] = 0;
  
  const pq = new MinHeap();
  pq.push({ node: start, cost: 0 });

  while (!pq.isEmpty()) {
    const { node, cost } = pq.pop();

    if (cost > distances[node]) continue;

    for (const neighbor of graph[node]) {
      const newCost = cost + neighbor.cost;
      if (newCost < distances[neighbor.node]) {
        distances[neighbor.node] = newCost;
        pq.push({ node: neighbor.node, cost: newCost });
      }
    }
  }
  return distances;
}

// 1. X에서 각 마을로 돌아오는 최단 시간 계산
const distFromX = dijkstra(X, adj);

// 2. 각 마을에서 X로 가는 최단 시간 계산 (역방향 그래프 이용)
const distToX = dijkstra(X, reverseAdj);

let maxTime = 0;
for (let i = 1; i <= N; i++) {
  const roundTripTime = distToX[i] + distFromX[i];
  if (roundTripTime > maxTime) {
    maxTime = roundTripTime;
  }
}

console.log(maxTime);