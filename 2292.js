let fs = require("fs");
let input = fs.readFileSync('test.txt').toString().split(' ')

const n = Number(input)

let cnt = 1
let level = 1

while (cnt < n) {
    cnt = cnt + 6 * level
    level++
}

console.log(level)