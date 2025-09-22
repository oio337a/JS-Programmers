const fs = require('fs');
// 백준 제출 시 '/dev/stdin'으로 변경
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(e => e.split(' ').map(Number));

// dp[i][j]: (i, j)까지 도달했을 때의 최대 가치
const dp = Array.from({ length: N }, () => Array(M).fill(0));

// 1. 첫 번째 행(row) 처리
dp[0][0] = board[0][0];
for (let j = 1; j < M; j++) {
    dp[0][j] = dp[0][j - 1] + board[0][j];
}

// 2. 두 번째 행부터 마지막 행까지 처리
for (let i = 1; i < N; i++) {
    // 임시 배열 2개 생성
    // tempLeftToRight: 왼쪽 -> 오른쪽으로 진행할 때의 최댓값 저장
    // tempRightToLeft: 오른쪽 -> 왼쪽으로 진행할 때의 최댓값 저장
    const tempLeftToRight = Array(M).fill(0);
    const tempRightToLeft = Array(M).fill(0);

    // Step 1: 바로 위에서 아래로 내려오는 경우
    tempLeftToRight[0] = dp[i - 1][0] + board[i][0];
    tempRightToLeft[M - 1] = dp[i - 1][M - 1] + board[i][M - 1];
    
    // Step 2: 왼쪽 -> 오른쪽으로 진행하며 최댓값 갱신
    for (let j = 1; j < M; j++) {
        tempLeftToRight[j] = Math.max(dp[i - 1][j], tempLeftToRight[j - 1]) + board[i][j];
    }

    // Step 3: 오른쪽 -> 왼쪽으로 진행하며 최댓값 갱신
    for (let j = M - 2; j >= 0; j--) {
        tempRightToLeft[j] = Math.max(dp[i - 1][j], tempRightToLeft[j + 1]) + board[i][j];
    }
    
    // Step 4: 두 임시 배열의 결과를 합쳐서 현재 행의 최종 dp값 결정
    for (let j = 0; j < M; j++) {
        dp[i][j] = Math.max(tempLeftToRight[j], tempRightToLeft[j]);
    }
}

console.log(dp[N - 1][M - 1]);