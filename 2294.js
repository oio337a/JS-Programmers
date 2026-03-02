const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const [n, k] = input[0].split(' ').map(Number)
const coins = input.slice(1).map(Number).sort((a, b) => a - b)
const MAX = 100001
const dp = Array(k + 1).fill(MAX)
dp[0] = 0

for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j < k + 1; j++) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
    }
}

console.log(dp[k] === MAX ? -1 : dp[k])