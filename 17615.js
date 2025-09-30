const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const N = input[0]
const balls = input[1].split('')

function cnt(target) {
    let answer = 0
    let flag = true
    for (let i = 0; i < N - 1; i++) {
        console.log(balls[i])
        if (!flag && balls[i] == target) {
            flag = true
        }
        if (flag && target != balls[i]) {
            flag = false
            answer++
        }
    }
    return answer
}

console.log(Math.max(cnt('R'), cnt('B')))