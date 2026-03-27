const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\r\n");

const T = parseInt(input[0]);
let idx = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);

  // 배추 좌표를 Set에 저장 (문자열 키로)
  const cabbages = new Set();
  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    cabbages.add(`${x},${y}`);
  }

  let wormCount = 0;
  
  const bfs = (startX, startY) => {
      const queue = [[startX, startY]];
      cabbages.delete(`${startX},${startY}`);
      
      while (queue.length > 0) {
          const [x, y] = queue.shift();
          
          for (let d = 0; d < 4; d++) {
              const nx = x + dx[d];
              const ny = y + dy[d];
              const key = `${nx},${ny}`;
              
              if (cabbages.has(key)) {
                  cabbages.delete(key);
                  queue.push([nx, ny]);
                }
            }
        }
    };
    
    // 좌표 리스트만 돌면서 BFS 실행
    while (cabbages.size > 0) {
        const [coord] = cabbages; // Set에서 하나 꺼내기
        const [x, y] = coord.split(",").map(Number);
        bfs(x, y);
        wormCount++;
    }
    
  console.log(wormCount);
}