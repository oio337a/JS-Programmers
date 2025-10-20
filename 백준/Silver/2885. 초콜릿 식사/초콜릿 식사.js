const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const K = parseInt(fs.readFileSync(filePath).toString().trim(), 10);

// 1. K보다 크거나 같은 가장 작은 2의 거듭제곱 크기(size) 찾기
let size = 1;
while (size < K) {
    size *= 2;
}

let breaks = 0;
let tempK = K;

// 2. 쪼개는 과정 시뮬레이션
if (K !== size) { // K가 이미 2의 거듭제곱이 아니면 쪼개기 시작
    let currentSize = size;
    while (tempK > 0) {
        // 현재 조각이 필요한 조각보다 크면 반으로 쪼갠다.
        if (currentSize > tempK) {
            currentSize /= 2;
            breaks++;
        } else { // 현재 조각이 필요하면 그만큼 떼어낸다.
            tempK -= currentSize;
        }
    }
}


console.log(size, breaks);