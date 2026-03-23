const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const N = Number(input[0])
const K = Number(input[1])

let [s, e] = [1, N * N]

while (s <= e) {
    const mid = Math.floor((s + e) / 2)

    let cnt = 0
    for (let i = 1; i < N + 1; i++) cnt += Math.min(Math.floor(mid / i), N)

    if (cnt >= K) e = mid - 1
    else s = mid + 1
}

console.log(s)