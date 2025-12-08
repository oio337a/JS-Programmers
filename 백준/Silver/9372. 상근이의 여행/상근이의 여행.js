const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input[0], 10); // 테스트 케이스 수
let lineIndex = 1; // 현재 읽고 있는 줄의 인덱스

for (let i = 0; i < T; i++) {
    // N (국가 수), M (비행기 종류)
    const [N, M] = input[lineIndex].split(' ').map(Number);
    
    // M개의 비행 스케줄은 읽을 필요가 없습니다.
    // 단순히 다음 테스트 케이스로 넘어가기 위해 인덱스만 M만큼 증가시킵니다.
    lineIndex += M + 1;
    
    // N개의 국가를 연결하는 데 필요한 최소 간선은 N-1
    console.log(N - 1);
}