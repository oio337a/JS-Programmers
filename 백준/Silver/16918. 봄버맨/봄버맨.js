const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C, N] = input.shift().split(' ').map(Number);
const initialGrid = input.map(row => row.split(''));

// 격자판을 출력하는 함수
function printGrid(grid) {
  console.log(grid.map(row => row.join('')).join('\n'));
}

// 모든 칸이 폭탄('O')인 격자판을 생성하는 함수
function createFullGrid() {
  return Array.from({ length: R }, () => Array(C).fill('O'));
}

// 특정 격자판에서 폭탄을 터뜨린 결과를 반환하는 함수
function getExplodedGrid(bombLocations) {
  const grid = createFullGrid();
  const dr = [-1, 1, 0, 0, 0]; // 상, 하, 좌, 우, 자신
  const dc = [0, 0, -1, 1, 0];
  
  for (const [r, c] of bombLocations) {
    for (let i = 0; i < 5; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
        grid[nr][nc] = '.';
      }
    }
  }
  return grid;
}

// 메인 로직
if (N <= 1) {
  // Case 1: N=0, N=1
  printGrid(initialGrid);
} else if (N % 2 === 0) {
  // Case 2: N이 짝수
  printGrid(createFullGrid());
} else {
  // 초기 폭탄 위치 찾기
  const initialBombLocations = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (initialGrid[i][j] === 'O') {
        initialBombLocations.push([i, j]);
      }
    }
  }
  
  // N=3일 때의 상태 (초기 폭탄 폭발 후)
  const gridAfterFirstExplosion = getExplodedGrid(initialBombLocations);

  if (N % 4 === 3) {
    // Case 3: N = 3, 7, 11, ...
    printGrid(gridAfterFirstExplosion);
  } else { // N % 4 === 1
    // N=5일 때의 상태를 위한 폭탄 위치 찾기
    const secondBombLocations = [];
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (gridAfterFirstExplosion[i][j] === 'O') {
          secondBombLocations.push([i, j]);
        }
      }
    }
    
    // N=5일 때의 상태 (두 번째 폭탄 폭발 후)
    const gridAfterSecondExplosion = getExplodedGrid(secondBombLocations);
    
    // Case 4: N = 5, 9, 13, ...
    printGrid(gridAfterSecondExplosion);
  }
}