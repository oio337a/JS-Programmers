const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, L, K] = input[0].split(' ').map(Number);
const stars = [];
for (let i = 1; i <= K; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  stars.push({ x, y });
}

let maxBounced = 0;

// 모든 별똥별 쌍을 순회하여 트램펄린의 위치를 결정
for (let i = 0; i < K; i++) {
  for (let j = 0; j < K; j++) {
    // i번째 별똥별의 x좌표, j번째 별똥별의 y좌표를
    // 트램펄린의 왼쪽 위 모서리 기준으로 삼는다.
    const cornerX = stars[i].x;
    const cornerY = stars[j].y;

    let currentBounced = 0;
    // 현재 트램펄린 위치에 몇 개의 별똥별이 들어가는지 확인
    for (let k = 0; k < K; k++) {
      const starX = stars[k].x;
      const starY = stars[k].y;
      
      // 트램펄린 범위: [cornerX, cornerX + L], [cornerY, cornerY + L]
      if (
        starX >= cornerX &&
        starX <= cornerX + L &&
        starY >= cornerY &&
        starY <= cornerY + L
      ) {
        currentBounced++;
      }
    }
    
    // 최대 튕겨낸 별똥별 개수 갱신
    maxBounced = Math.max(maxBounced, currentBounced);
  }
}

// 튕겨내지 못한 별똥별의 최소 개수를 출력
console.log(K - maxBounced);