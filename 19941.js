const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
let arr = input[1].split('');
let answer = 0;

for (let i = 0; i < N; i++) {
    if (arr[i] === 'P') {
        for (let d = -K; d <= K; d++) { // 가까운 거리부터 확인
            const pos = i + d;
            if (pos < 0 || pos >= N) continue; // 범위 체크
            if (arr[pos] === 'H') {
                arr[pos] = 'E'; // 먹음
                answer++;
                break;
            }
        }
    }
}

console.log(answer);
