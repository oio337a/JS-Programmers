const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')
const MAX = parseInt(input)

let answer = 0
for (let i = 1; i < MAX; i++) {
    let temp = [...String(i)].reduce((acc, cur) => acc + Number(cur), 0)
    temp += i

    if (temp === MAX) {
        answer = i
        break;
    }
}

console.log(answer)