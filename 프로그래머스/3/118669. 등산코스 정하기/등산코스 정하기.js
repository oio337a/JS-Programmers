// 다익스트라를 위한 최소 힙 (우선순위 큐) 구현
class MinHeap {
  constructor() { this.heap = []; }
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }
  swap(i1, i2) { [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]; }
  
  push(node) {
    this.heap.push(node);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (parentIndex >= 0 && this.heap[currentIndex].intensity < this.heap[parentIndex].intensity) {
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
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].intensity < this.heap[smallestIndex].intensity) {
        smallestIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].intensity < this.heap[smallestIndex].intensity) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === currentIndex) break;
      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }
    return minNode;
  }
  
  isEmpty() { return this.heap.length === 0; }
}


function solution(n, paths, gates, summits) {
    // 인접 리스트로 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [i, j, w] of paths) {
        graph[i].push({ node: j, weight: w });
        graph[j].push({ node: i, weight: w });
    }

    // 산봉우리와 출입구를 빠르게 확인하기 위해 Set으로 변환
    const isSummit = new Set(summits);
    
    const intensity = Array(n + 1).fill(Infinity);
    const pq = new MinHeap();

    // 모든 출입구를 시작점으로 설정
    for (const gate of gates) {
        intensity[gate] = 0;
        pq.push({ node: gate, intensity: 0 });
    }
    
    // 변형된 다익스트라 알고리즘
    while (!pq.isEmpty()) {
        const { node: currentNode, intensity: currentIntensity } = pq.pop();

        // 현재 경로의 intensity가 이미 기록된 최소 intensity보다 크거나
        // 현재 노드가 산봉우리이면 더 이상 탐색하지 않음
        if (currentIntensity > intensity[currentNode] || isSummit.has(currentNode)) {
            continue;
        }

        for (const { node: nextNode, weight } of graph[currentNode]) {
            // 다음 노드까지의 새로운 intensity 계산
            const newIntensity = Math.max(currentIntensity, weight);
            
            if (newIntensity < intensity[nextNode]) {
                intensity[nextNode] = newIntensity;
                pq.push({ node: nextNode, intensity: newIntensity });
            }
        }
    }

    // 결과 찾기
    let minIntensity = Infinity;
    let bestSummit = -1;

    // 산봉우리를 번호순으로 정렬하여 tie-breaking 규칙 처리
    summits.sort((a, b) => a - b);
    
    for (const summit of summits) {
        if (intensity[summit] < minIntensity) {
            minIntensity = intensity[summit];
            bestSummit = summit;
        }
    }

    return [bestSummit, minIntensity];
}