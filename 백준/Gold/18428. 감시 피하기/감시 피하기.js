const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0], 10);
const corridor = input.slice(1).map(line => line.split(' '));

const emptySpaces = [];
const teachers = [];

// 빈칸과 선생님 위치 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (corridor[i][j] === 'X') {
      emptySpaces.push([i, j]);
    } else if (corridor[i][j] === 'T') {
      teachers.push([i, j]);
    }
  }
}

let canAvoid = false;

// 모든 선생님 위치에서 감시를 확인하는 함수
function check() {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  for (const [ty, tx] of teachers) {
    for (let i = 0; i < 4; i++) {
      let ny = ty;
      let nx = tx;
      while (true) {
        ny += dy[i];
        nx += dx[i];

        if (ny < 0 || ny >= N || nx < 0 || nx >= N || corridor[ny][nx] === 'O') {
          break; // 복도 끝이거나 장애물을 만나면 그 방향은 안전
        }
        if (corridor[ny][nx] === 'S') {
          return false; // 학생을 발견하면 실패
        }
      }
    }
  }
  return true; // 모든 선생님이 모든 방향에서 학생을 발견하지 못함
}

// 장애물 3개를 설치하는 모든 조합을 만드는 DFS 함수
function dfs(obstacleCount, startIndex) {
  if (canAvoid) return; // 이미 성공 케이스를 찾았으면 더 이상 탐색하지 않음

  if (obstacleCount === 3) {
    if (check()) {
      canAvoid = true;
    }
    return;
  }

  for (let i = startIndex; i < emptySpaces.length; i++) {
    const [y, x] = emptySpaces[i];
    
    corridor[y][x] = 'O'; // 장애물 설치
    dfs(obstacleCount + 1, i + 1);
    corridor[y][x] = 'X'; // 장애물 제거 (백트래킹)
  }
}

dfs(0, 0);

console.log(canAvoid ? 'YES' : 'NO');