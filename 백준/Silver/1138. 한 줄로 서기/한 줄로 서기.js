const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const L = input[1].split(' ').map(Number);

const result = Array(N).fill(0);

for (let i = 0; i < N; i++) { // 1번 사람부터 N번 사람까지
    let cnt = 0;
    for (let j = 0; j < N; j++) {
        if (result[j] === 0) { // 빈 자리
            if (cnt === L[i]) { 
                result[j] = i + 1; // 사람 번호는 1부터
                break;
            }
            cnt++;
        }
    }
}

console.log(result.join(' '));
