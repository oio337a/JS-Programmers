const fs = require('fs');
const s = fs.readFileSync('test.txt').toString().trim();

const n = s.length;
const cntA = [...s].filter(ch => ch === 'a').length;

if (cntA === 0 || cntA === n) {
    console.log(0);
    process.exit(0);
}

// 문자열을 두 번 이어붙임 (원형 처리)
const doubled = s + s;

let bCount = 0;
// 처음 윈도우
for (let i = 0; i < cntA; i++) {
    if (doubled[i] === 'b') bCount++;
}

let minSwap = bCount;

// 슬라이딩 윈도우
for (let i = cntA; i < doubled.length; i++) {
    if (doubled[i - cntA] === 'b') bCount--;
    if (doubled[i] === 'b') bCount++;
    minSwap = Math.min(minSwap, bCount);
}

console.log(minSwap);
