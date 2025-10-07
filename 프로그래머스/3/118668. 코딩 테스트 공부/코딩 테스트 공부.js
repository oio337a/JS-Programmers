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
    while (parentIndex >= 0 && this.heap[currentIndex].cost < this.heap[parentIndex].cost) {
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
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].cost < this.heap[smallestIndex].cost) {
        smallestIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].cost < this.heap[smallestIndex].cost) {
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

function solution(alp, cop, problems) {
    let max_alp = 0;
    let max_cop = 0;

    // 1. 모든 문제를 풀기 위한 목표 alp, cop 구하기
    for (const [alp_req, cop_req] of problems) {
        max_alp = Math.max(max_alp, alp_req);
        max_cop = Math.max(max_cop, cop_req);
    }

    // 초기 능력치가 이미 목표치보다 높을 수 있으므로 맞춰줌
    alp = Math.min(alp, max_alp);
    cop = Math.min(cop, max_cop);

    // 2. DP 테이블 초기화
    const dp = Array.from({ length: max_alp + 1 }, () => 
        Array(max_cop + 1).fill(Infinity)
    );

    // 3. 시작 상태 설정
    dp[alp][cop] = 0;

    // 4. DP 테이블 채우기 (Bottom-Up)
    for (let i = alp; i <= max_alp; i++) {
        for (let j = cop; j <= max_cop; j++) {
            if (dp[i][j] === Infinity) continue; // 도달할 수 없는 상태는 건너뜀

            const currentTime = dp[i][j];

            // 방법 1: 알고리즘 공부
            if (i + 1 <= max_alp) {
                dp[i + 1][j] = Math.min(dp[i + 1][j], currentTime + 1);
            }

            // 방법 2: 코딩 공부
            if (j + 1 <= max_cop) {
                dp[i][j + 1] = Math.min(dp[i][j + 1], currentTime + 1);
            }

            // 방법 3: 문제 풀이
            for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
                if (i >= alp_req && j >= cop_req) {
                    const next_alp = Math.min(max_alp, i + alp_rwd);
                    const next_cop = Math.min(max_cop, j + cop_rwd);
                    dp[next_alp][next_cop] = Math.min(dp[next_alp][next_cop], currentTime + cost);
                }
            }
        }
    }
    
    return dp[max_alp][max_cop];
}