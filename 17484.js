const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const INF = 1e9;
const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(3).fill(INF))
);

// 초기값: 첫 번째 행은 이전 방향이 없으니 그냥 비용만
for (let c = 0; c < M; c++) {
    for (let d = 0; d < 3; d++) {
        dp[0][c][d] = board[0][c];
    }
}

// DP 계산
for (let r = 1; r < N; r++) {
    for (let c = 0; c < M; c++) {
        for (let d = 0; d < 3; d++) { // 현재 도착 방향
            let prevC = c + (d - 1); // d=0 → 왼쪽 위, d=1 → 위, d=2 → 오른쪽 위
            if (prevC < 0 || prevC >= M) continue;
            for (let pd = 0; pd < 3; pd++) { // 이전 방향
                if (pd === d) continue; // 같은 방향 금지
                dp[r][c][d] = Math.min(dp[r][c][d], dp[r - 1][prevC][pd] + board[r][c]);
            }
        }
    }
}

// 마지막 행에서 최소값 찾기
let answer = INF;
for (let c = 0; c < M; c++) {
    for (let d = 0; d < 3; d++) {
        answer = Math.min(answer, dp[N - 1][c][d]);
    }
}

console.log(answer);
