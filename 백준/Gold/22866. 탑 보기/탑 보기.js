const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0], 10);
// 인덱스를 1부터 사용하기 위해 맨 앞에 0을 추가합니다.
const heights = [0, ...input[1].split(' ').map(Number)];

const count = Array(N + 1).fill(0);
// { dist: Infinity, index: -1 } 형태로 가장 가까운 건물 정보를 저장
const near = Array.from({ length: N + 1 }, () => ({
  dist: Infinity,
  index: -1,
}));

let stack = [];

// 1. 왼쪽에서 오른쪽으로 스캔
for (let i = 1; i <= N; i++) {
  // 현재 건물보다 작거나 같은 건물을 스택에서 제거
  while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
    stack.pop();
  }
  // 스택에 남은 건물들은 현재 건물에서 보이는 왼쪽 건물들
  count[i] += stack.length;

  // 가장 가까운 왼쪽 건물 정보 갱신
  if (stack.length > 0) {
    const closestIndex = stack[stack.length - 1];
    const dist = i - closestIndex;
    if (dist < near[i].dist) {
      near[i] = { dist, index: closestIndex };
    }
  }
  stack.push(i);
}

stack = []; // 스택 초기화

// 2. 오른쪽에서 왼쪽으로 스캔
for (let i = N; i >= 1; i--) {
  // 현재 건물보다 작거나 같은 건물을 스택에서 제거
  while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
    stack.pop();
  }
  // 스택에 남은 건물들은 현재 건물에서 보이는 오른쪽 건물들
  count[i] += stack.length;

  // 가장 가까운 오른쪽 건물 정보와 기존 정보 비교 후 갱신
  if (stack.length > 0) {
    const closestIndex = stack[stack.length - 1];
    const dist = closestIndex - i;
    
    if (dist < near[i].dist) {
      near[i] = { dist, index: closestIndex };
    } else if (dist === near[i].dist && closestIndex < near[i].index) {
      // 거리가 같으면 인덱스가 작은 것으로 갱신
      near[i].index = closestIndex;
    }
  }
  stack.push(i);
}

let result = '';
for (let i = 1; i <= N; i++) {
  if (count[i] === 0) {
    result += '0\n';
  } else {
    result += `${count[i]} ${near[i].index}\n`;
  }
}

console.log(result.trim());