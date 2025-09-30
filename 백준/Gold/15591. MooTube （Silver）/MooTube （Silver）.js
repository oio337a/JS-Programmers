const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, Q] = input[0].split(' ').map(Number);

// 인접 리스트로 그래프 생성
const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [p, q, r] = input[i].split(' ').map(Number);
  // { node: 연결된 노드, rel: 유사도 }
  adj[p].push({ node: q, rel: r });
  adj[q].push({ node: p, rel: r });
}

let result = '';

// Q개의 질문 처리
for (let i = N; i < N + Q; i++) {
  const [k, v] = input[i].split(' ').map(Number);
  
  // BFS로 K 이상인 영상 개수 찾기
  let count = 0;
  const queue = [v];
  const visited = Array(N + 1).fill(false);
  visited[v] = true;
  
  let head = 0;
  while(head < queue.length) {
    const currentNode = queue[head++];
    
    for (const neighbor of adj[currentNode]) {
      // 방문하지 않았고, 유사도가 k 이상인 경우
      if (!visited[neighbor.node] && neighbor.rel >= k) {
        visited[neighbor.node] = true;
        queue.push(neighbor.node);
        count++;
      }
    }
  }
  result += count + '\n';
}

console.log(result.trim());