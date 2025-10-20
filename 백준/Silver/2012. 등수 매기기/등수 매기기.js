const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = parseInt(input[0])
const nums = input.slice(1).map(Number).sort((a, b) => a - b)

let answer = 0

for (let i = 0; i < N; i++) {
    answer += Math.abs(i + 1 - nums[i])
}

console.log(answer)