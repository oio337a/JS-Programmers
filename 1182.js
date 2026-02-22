const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const [N, S] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

let answer = 0;

// 1부터 (1<<N)-1 까지 → 공집합 제외
for (let mask = 1; mask < (1 << N); mask++) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        if (mask & (1 << i)) {  // i번째 원소 포함 여부
            sum += list[i];
        }
    }
    if (sum === S) answer++;
}

console.log(answer);