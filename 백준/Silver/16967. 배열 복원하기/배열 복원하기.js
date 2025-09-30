const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [H, W, X, Y] = input[0].split(' ').map(Number);
const B = input.slice(1).map(row => row.split(' ').map(Number));

// 복원할 배열 A를 H x W 크기로 초기화
const A = Array.from({ length: H }, () => Array(W).fill(0));

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    // 겹치는 영역인지 확인
    if (i >= X && j >= Y) {
      // 겹치는 영역: B[i][j] = A[i][j] + A[i-X][j-Y]
      // 따라서, A[i][j] = B[i][j] - A[i-X][j-Y]
      A[i][j] = B[i][j] - A[i - X][j - Y];
    } else {
      // 겹치지 않는 영역: B[i][j] = A[i][j]
      A[i][j] = B[i][j];
    }
  }
}

// 결과 출력
for (let i = 0; i < H; i++) {
  console.log(A[i].join(' '));
}