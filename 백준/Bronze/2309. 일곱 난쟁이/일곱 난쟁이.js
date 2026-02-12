const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a, b) => a - b)

const targetNum = input.reduce((pre, cur) => pre + cur) - 100

let s, e
s = 0
e = 8

while (s < e) {
    const temp = input[s] + input[e]
    if (temp === targetNum) break;
    else if (temp > targetNum) e--;
    else if (temp < targetNum) s++;
}

input.filter(item => item !== input[s] && item !== input[e]).forEach(item => console.log(item))