const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, K] = input[0].split(' ').map((e) => Number(e))
let tieCnt = 0
let answer = 0
const scores = input.slice(1).map((e) => e.split(' ').map(a => Number(a)))
const [_, gold, silver, bronse] = scores.filter((value) => value[0] === K)[0]

for (let i = 0; i < N; i++) {
    if (scores[i][1] < gold) continue
    if (scores[i][1] > gold) {
        answer++
        continue
    }
    
    if (scores[i][2] < silver) continue
    if (scores[i][2] > silver) {
        answer++
        continue
    }

    if (scores[i][3] < bronse) continue
    if (scores[i][3] > bronse) {
        answer++
        continue
    }

    tieCnt++
}

console.log(answer + tieCnt - 1)