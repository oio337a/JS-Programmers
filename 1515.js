const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let target = input;
let idx = 0;
let num = 1;

while (idx < target.length) {
    const strNum = String(num);
    for (let ch of strNum) {
        if (target[idx] === ch) {
            idx++;
            if (idx === target.length) break;
        }
    }
    num++;
}

console.log(num - 1);
