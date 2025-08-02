const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const n = parseInt(input[0], 10);
const channels = input.slice(1);

let answer = [];

let cursor = 0;

// KBS1을 맨 앞으로
let kbs1 = channels.indexOf('KBS1');
while (cursor < kbs1) {
    answer.push('1');
    cursor++;
}
while (cursor > 0) {
    // swap current and above
    [channels[cursor], channels[cursor - 1]] = [channels[cursor - 1], channels[cursor]];
    answer.push('4');
    cursor--;
}

// KBS2를 두 번째로
let kbs2 = channels.indexOf('KBS2');
while (cursor < kbs2) {
    answer.push('1');
    cursor++;
}
while (cursor > 1) {
    [channels[cursor], channels[cursor - 1]] = [channels[cursor - 1], channels[cursor]];
    answer.push('4');
    cursor--;
}

console.log(answer.join(''));
