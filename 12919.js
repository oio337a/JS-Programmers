const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const S = input[0];
const T = input[1];

let result = 0;

function dfs(str) {
    if (str.length === S.length) {
        if (str === S) result = 1;
        return;
    }

    // 끝이 A인 경우 -> A 제거
    if (str.endsWith('A')) {
        dfs(str.slice(0, -1));
    }

    // 시작이 B인 경우 -> B 제거 + 뒤집기
    if (str.startsWith('B')) {
        dfs(str.slice(1).split('').reverse().join(''));
    }
}

dfs(T);
console.log(result);
