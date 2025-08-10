const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const [N, X] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let nu = [0]

let l = 0
for (let a of arr) {
    nu.push(nu[l++] + parseInt(a))
}

let max = 0
let answer = 1

for (let i = 0; i < N + 1 - X; i++) {
    const temp = nu[i + X] - nu[i]
    if (max < temp) {
        max = temp
        answer = 1
    } else if (max === temp) {
        answer++
    }
}

if (max === 0) {
    console.log('SAD')
    return;
}
console.log(max)
console.log(answer)