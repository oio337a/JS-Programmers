const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.length;
const used = new Set();

for (let line of input.slice(1)) {
    let words = line.split(' ');
    let chosenIdx = -1;

    // 1. 각 단어의 첫 글자 확인
    let pos = 0;
    for (let w of words) {
        let c = w[0].toLowerCase();
        if (!used.has(c)) {
            used.add(c);
            chosenIdx = pos;
            break;
        }
        pos += w.length + 1; // 띄어쓰기 포함
    }

    // 2. 못 찾으면 전체 문자열 확인
    if (chosenIdx === -1) {
        for (let i = 0; i < line.length; i++) {
            let c = line[i].toLowerCase();
            if (c !== ' ' && !used.has(c)) {
                used.add(c);
                chosenIdx = i;
                break;
            }
        }
    }

    // 3. 출력 만들기
    if (chosenIdx !== -1) {
        line = line.slice(0, chosenIdx) + "[" + line[chosenIdx] + "]" + line.slice(chosenIdx + 1);
    }

    console.log(line);
}
