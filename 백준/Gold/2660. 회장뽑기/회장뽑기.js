/**
 * 회장뽑기
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

// 플로이드-와샬 알고리즘을 위한 거리 배열 초기화
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

// 자기 자신으로의 거리는 0으로 초기화
for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

// 입력된 관계에 따라 거리 초기화
for (let i = 1; i < input.length - 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  dist[a][b] = 1;
  dist[b][a] = 1;
}

// 플로이드-와샬 알고리즘을 사용하여 모든 회원 간의 최단 거리 계산
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
    }
  }
}

// 각 회원의 점수를 계산
const scores = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  scores[i] = Math.max(...dist[i].slice(1));
}

// 최소 점수 계산
const minScore = Math.min(...scores.slice(1));

// 최소 점수를 가진 회원들을 찾아내고, 그들의 수를 계산
const candidates = [];
for (let i = 1; i <= n; i++) {
  if (scores[i] === minScore) {
    candidates.push(i);
  }
}

// 결과 출력
console.log(minScore, candidates.length);
console.log(candidates.join(' '));
