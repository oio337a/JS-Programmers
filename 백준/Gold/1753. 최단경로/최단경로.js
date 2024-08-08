/**
 * 최단경로
 *
 * 문제를 보고 다익스트라 알고리즘이 떠올랐다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [V, E] = input[0].split(' ').map(Number);
const start = parseInt(input[1], 10);
const adjList = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  adjList[u].push([v, w]);
}

// 최소 힙을 기반으로 한 우선순위 큐 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element[1] >= parent[1]) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }

    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild[1] < element[1]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild[1] < element[1]) ||
          (swap !== null && rightChild[1] < leftChild[1])
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = element;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// 다익스트라 알고리즘 구현
const dijkstra = (start) => {
  const distances = Array(V + 1).fill(Infinity);
  const pq = new MinHeap(); // [노드, 거리]

  distances[start] = 0;
  pq.insert([start, 0]);

  while (!pq.isEmpty()) {
    const [currentNode, currentDist] = pq.extractMin();

    if (currentDist > distances[currentNode]) continue;

    adjList[currentNode].forEach(([nextNode, weight]) => {
      const distance = currentDist + weight;

      if (distance < distances[nextNode]) {
        distances[nextNode] = distance;
        pq.insert([nextNode, distance]);
      }
    });
  }

  return distances;
};

const distances = dijkstra(start);

let result = '';
for (let i = 1; i <= V; i++) {
  result += (distances[i] === Infinity ? 'INF' : distances[i]) + '\n';
}

console.log(result);
