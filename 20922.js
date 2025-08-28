const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = new Map();
let left = 0, maxLen = 0;

for (let right = 0; right < N; right++) {
    let num = arr[right];
    count.set(num, (count.get(num) || 0) + 1);

    // K 초과하면 left 이동
    while (count.get(num) > K) {
        let leftNum = arr[left];
        count.set(leftNum, count.get(leftNum) - 1);
        left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
}

console.log(maxLen);
