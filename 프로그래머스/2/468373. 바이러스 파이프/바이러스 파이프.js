function solution(n, infection, edges, k) {
  // 그래프 구성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [x, y, type] of edges) {
    graph[x].push([y, type]);
    graph[y].push([x, type]);
  }

  // 특정 파이프 타입을 열었을 때 감염 확산
  function spread(infected, pipeType) {
    const visited = new Set(infected);
    const queue = [...infected];
    while (queue.length > 0) {
      const node = queue.shift();
      for (const [next, t] of graph[node]) {
        if (t === pipeType && !visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return visited;
  }

  let maxInfected = 1;

  // DFS로 행동 순서 탐색
  function dfs(infected, steps) {
    maxInfected = Math.max(maxInfected, infected.size);
    if (steps === k) return;

    for (let pipeType = 1; pipeType <= 3; pipeType++) {
      const newInfected = spread(infected, pipeType);
      dfs(newInfected, steps + 1);
    }
  }

  dfs(new Set([infection]), 0);
  return maxInfected;
}