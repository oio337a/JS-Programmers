const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const office = input.slice(1).map(line => line.split(' ').map(Number));

const cctvList = [];
let wallCount = 0;

// CCTV 위치와 벽 개수 파악
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (office[i][j] >= 1 && office[i][j] <= 5) {
      cctvList.push({ type: office[i][j], y: i, x: j });
    }
    if (office[i][j] === 6) {
      wallCount++;
    }
  }
}

// 0:북, 1:동, 2:남, 3:서 (시계방향)
const directions = [
  [-1, 0], [0, 1], [1, 0], [0, -1]
];

// CCTV 타입별 감시 방향 (0~3 인덱스 기준)
const cctvModes = [
  [], // 0번은 없음
  [[0], [1], [2], [3]], // 1번 CCTV: 4가지 방향
  [[0, 2], [1, 3]], // 2번 CCTV: 2가지 방향 (상하, 좌우)
  [[0, 1], [1, 2], [2, 3], [3, 0]], // 3번 CCTV: 4가지 방향 (직각)
  [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]], // 4번 CCTV: 4가지 방향
  [[0, 1, 2, 3]] // 5번 CCTV: 1가지 방향 (전방향)
];

let minBlindSpot = N * M;

function dfs(depth, currentOffice) {
  // 모든 CCTV 방향을 결정했으면 사각지대 계산
  if (depth === cctvList.length) {
    let watchedArea = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (currentOffice[i][j] === '#') {
          watchedArea++;
        }
      }
    }
    const blindSpot = N * M - watchedArea - cctvList.length - wallCount;
    minBlindSpot = Math.min(minBlindSpot, blindSpot);
    return;
  }

  const cctv = cctvList[depth];
  const modes = cctvModes[cctv.type];

  for (const mode of modes) {
    // 다음 재귀로 넘겨줄 새로운 지도 복사
    const newOffice = currentOffice.map(row => [...row]);

    // 현재 CCTV의 감시 영역 표시
    for (const dir of mode) {
      let ny = cctv.y;
      let nx = cctv.x;
      while (true) {
        ny += directions[dir][0];
        nx += directions[dir][1];
        if (ny < 0 || ny >= N || nx < 0 || nx >= M || newOffice[ny][nx] === 6) {
          break; // 범위를 벗어나거나 벽을 만나면 중단
        }
        if (newOffice[ny][nx] === 0) {
          newOffice[ny][nx] = '#'; // 감시 영역 표시
        }
      }
    }
    
    // 다음 CCTV로 재귀 호출
    dfs(depth + 1, newOffice);
  }
}

dfs(0, office);
console.log(minBlindSpot);