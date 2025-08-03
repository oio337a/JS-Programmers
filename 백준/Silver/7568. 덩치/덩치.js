const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, arr] = [input[0], input.slice(1).map(e => e.split(' ').map(Number))]
let answer = []
for (let i = 0; i < N; i++) {
    let level = 1
    for (let j = 0; j < N; j++) {
        if (i === j) continue

        if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) level++
    }
    
    answer.push(level)
}

console.log(answer.join(' '))