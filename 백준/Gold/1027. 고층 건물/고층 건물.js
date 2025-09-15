const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0], 10);
// 빌딩이 하나만 있으면 볼 수 있는 건물이 없으므로 0을 출력하고 종료
if (N <= 1) {
  console.log(0);
  process.exit(0);
}
const buildings = input[1].split(' ').map(Number);

let maxVisibleCount = 0;

// 각 빌딩을 기준으로 순회
for (let i = 0; i < N; i++) {
  let currentVisibleCount = 0;
  const currentBuildingHeight = buildings[i];

  // 1. 왼쪽 탐색
  let minSlopeLeft = Infinity;
  for (let j = i - 1; j >= 0; j--) {
    const nextBuildingHeight = buildings[j];
    // 기울기 계산: (y증가량) / (x증가량)
    const slope = (currentBuildingHeight - nextBuildingHeight) / (i - j);

    if (slope < minSlopeLeft) {
      currentVisibleCount++;
      minSlopeLeft = slope;
    }
  }

  // 2. 오른쪽 탐색
  let maxSlopeRight = -Infinity;
  for (let j = i + 1; j < N; j++) {
    const nextBuildingHeight = buildings[j];
    // 기울기 계산
    const slope = (nextBuildingHeight - currentBuildingHeight) / (j - i);

    if (slope > maxSlopeRight) {
      currentVisibleCount++;
      maxSlopeRight = slope;
    }
  }
  
  // 현재 빌딩에서 보이는 총 개수를 최대값과 비교하여 갱신
  if (currentVisibleCount > maxVisibleCount) {
    maxVisibleCount = currentVisibleCount;
  }
}

console.log(maxVisibleCount);