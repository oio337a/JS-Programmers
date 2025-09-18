const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const [R, C] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(line => line.split(''));

const jihun_q = [];
const fire_q = [];

// 각 칸까지의 시간을 기록할 배열. -1은 미방문, 0 이상은 방문 시간.
const jihun_visited = Array.from({ length: R }, () => Array(C).fill(-1));
const fire_visited = Array.from({ length: R }, () => Array(C).fill(-1));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// 초기 위치 설정
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (maze[i][j] === 'J') {
      jihun_q.push([i, j]);
      jihun_visited[i][j] = 0;
    }
    if (maze[i][j] === 'F') {
      fire_q.push([i, j]);
      fire_visited[i][j] = 0;
    }
  }
}

let jihun_idx = 0;
let fire_idx = 0;

// 1. 불에 대한 BFS를 먼저 전체 수행하여 각 칸에 불이 도달하는 시간을 기록
while (fire_idx < fire_q.length) {
  const [y, x] = fire_q[fire_idx++];
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (ny < 0 || ny >= R || nx < 0 || nx >= C) continue;
    if (maze[ny][nx] === '#' || fire_visited[ny][nx] !== -1) continue;
    fire_visited[ny][nx] = fire_visited[y][x] + 1;
    fire_q.push([ny, nx]);
  }
}

// 2. 지훈이에 대한 BFS 수행
while (jihun_idx < jihun_q.length) {
  const [y, x] = jihun_q[jihun_idx++];
  
  // 현재 위치가 가장자리인지 확인
  if (y === 0 || y === R - 1 || x === 0 || x === C - 1) {
    console.log(jihun_visited[y][x] + 1);
    console.log(fire_visited)
console.log(jihun_visited)
    process.exit(0);
  }

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    // 미로 범위를 벗어나면 탈출 성공
    if (ny < 0 || ny >= R || nx < 0 || nx >= C) {
      console.log(jihun_visited[y][x] + 1);
      process.exit(0);
    }
    
    // 벽이거나 이미 방문한 곳이면 스킵
    if (maze[ny][nx] === '#' || jihun_visited[ny][nx] !== -1) continue;
    
    // 불이 이미 도달했거나, 지훈이와 동시에 도달하는 경우 스킵
    if (fire_visited[ny][nx] !== -1 && fire_visited[ny][nx] <= jihun_visited[y][x] + 1) continue;
    
    jihun_visited[ny][nx] = jihun_visited[y][x] + 1;
    jihun_q.push([ny, nx]);
  }
}


// 루프가 끝났는데 탈출하지 못했다면
console.log('IMPOSSIBLE');