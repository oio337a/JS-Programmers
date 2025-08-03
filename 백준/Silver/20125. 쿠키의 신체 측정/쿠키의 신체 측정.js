const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const map = input.slice(1).map(line => line.split(''));

// 1. 심장 찾기
let heartRow = -1, heartCol = -1;

for (let i = 0; i < N; i++) {
    const idx = map[i].indexOf('*');
    if (idx !== -1) {
        // 심장은 첫 별 바로 아래 행의 가운데
        heartRow = i + 1;
        heartCol = idx;
        break;
    }
}

// 심장 위치는 1-based
console.log(`${heartRow + 1} ${heartCol + 1}`);

// 2. 왼팔
let leftArm = 0;
for (let c = heartCol - 1; c >= 0; c--) {
    if (map[heartRow][c] === '*') leftArm++;
    else break;
}

// 3. 오른팔
let rightArm = 0;
for (let c = heartCol + 1; c < N; c++) {
    if (map[heartRow][c] === '*') rightArm++;
    else break;
}

// 4. 허리
let waist = 0;
let waistEnd = heartRow + 1;
for (let r = heartRow + 1; r < N; r++) {
    if (map[r][heartCol] === '*') {
        waist++;
        waistEnd = r;
    } else break;
}

// 5. 왼다리
let leftLeg = 0;
for (let r = waistEnd + 1; r < N; r++) {
    if (map[r][heartCol - 1] === '*') leftLeg++;
    else break;
}

// 6. 오른다리
let rightLeg = 0;
for (let r = waistEnd + 1; r < N; r++) {
    if (map[r][heartCol + 1] === '*') rightLeg++;
    else break;
}

console.log(`${leftArm} ${rightArm} ${waist} ${leftLeg} ${rightLeg}`);
