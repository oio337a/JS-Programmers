const fs = require('fs');
// 백준 제출 시에는 아래 경로로 바꿔주세요.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = 'test.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1).map(e => e.split(''));

// 방문한 '알파벳'을 기록할 Set
const visitedAlphabets = new Set();

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let maxMoves = 0;

function dfs(x, y, moveCount) {
    // 현재까지의 이동 횟수로 최대값을 갱신
    maxMoves = Math.max(maxMoves, moveCount);

    // 4방향 탐색
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 1. 보드 범위를 벗어나지 않고,
        if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
            const nextAlphabet = board[nx][ny];
            // 2. 아직 방문하지 않은 알파벳이라면
            if (!visitedAlphabets.has(nextAlphabet)) {
                // (1) 방문 기록을 추가하고
                visitedAlphabets.add(nextAlphabet);
                // (2) 다음 경로로 DFS 탐색
                dfs(nx, ny, moveCount + 1);
                // (3) (중요!) 다음 탐색을 위해 현재 경로의 방문 기록을 삭제 (백트래킹)
                visitedAlphabets.delete(nextAlphabet);
            }
        }
    }
}

// 시작점 (0, 0) 처리
const startAlphabet = board[0][0];
visitedAlphabets.add(startAlphabet); // 시작 알파벳을 방문 목록에 추가
dfs(0, 0, 1); // (0,0)에서 이동 횟수 1로 시작

console.log(maxMoves);