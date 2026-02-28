const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\r\n')

const N = Number(input)
const MAX = 100000000000

// ```
// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// ```

const dp = Array(1000001).fill(MAX)
dp[1] = 0

for (let i = 1; i < N; i++) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1)
    if (i * 2 < MAX) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1)
    if (i * 3 < MAX) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1)
}

console.log(dp[N])