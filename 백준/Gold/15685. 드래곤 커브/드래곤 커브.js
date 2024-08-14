/**
 * 드래곤 커브
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const directions = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];
const map = Array.from(Array(101), () => Array(101).fill(false));

// 드래곤 커브 그리기
input.slice(1).forEach((line) => {
  const [x, y, d, g] = line.split(' ').map(Number);

  // 0세대 초기화
  const curves = [[x, y]];
  let [nx, ny] = [x + directions[d][0], y + directions[d][1]];
  curves.push([nx, ny]);
  map[y][x] = true;
  map[ny][nx] = true;

  // g세대까지 그리기
  for (let gen = 1; gen <= g; gen++) {
    const length = curves.length;
    const [ex, ey] = curves[length - 1];
    for (let i = length - 2; i >= 0; i--) {
      const [cx, cy] = curves[i];
      const [dx, dy] = [ex - cy + ey, ey + cx - ex];
      curves.push([dx, dy]);
      map[dy][dx] = true;
    }
  }
});

// 정사각형 세기
let count = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (map[i][j] && map[i][j + 1] && map[i + 1][j] && map[i + 1][j + 1]) {
      count++;
    }
  }
}

console.log(count);
