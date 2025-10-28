const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

const teams = []

for (let i = 0; i < n; i++) {
    teams.push(arr[i] + arr[2 * n - 1 - i])
}

console.log(Math.min(...teams))