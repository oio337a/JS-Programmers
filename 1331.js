const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');

const rows = {'A': 1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6};
const dx = [2, 1, 2, 1, -2, -1, -2, -1];
const dy = [1, 2, -1, -2, 1, 2, -1, -2];

// 7x7 배열 (1-based 인덱싱 사용)
const visited = Array.from({length: 7}, () => Array(7).fill(false));

// 나이트 이동 가능 여부 체크
function check(x, y, nx, ny) {
    for (let i = 0; i < 8; i++) {
        if (x + dx[i] === nx && y + dy[i] === ny) return true;
    }
    return false;
}

// 1. 시작 위치 처리
const startRowChar = input[0][0];
const startColNum = Number(input[0][1]);
const startRow = rows[startRowChar];
const startCol = startColNum;

// 2. 시작 위치 방문 표시 (버그 3 수정)
visited[startRow][startCol] = true;

let prevRow = startRow;
let prevCol = startCol;

let isValid = true; // 유효성 플래그

for (let i = 1; i < 36; i++) {
    const currRowChar = input[i][0];
    const currColNum = Number(input[i][1]); // (버그 2 수정)
    
    // (버그 1 수정) rows.get() -> rows[]
    const currRow = rows[currRowChar];
    const currCol = currColNum;

    // 1. 나이트 이동이 올바른지, 2. 이미 방문한 곳인지 확인
    if (!check(prevRow, prevCol, currRow, currCol) || visited[currRow][currCol]) {
        isValid = false;
        break; // 하나라도 틀리면 즉시 중단
    }

    // 방문 처리 및 현재 위치 갱신
    visited[currRow][currCol] = true;
    prevRow = currRow;
    prevCol = currCol;
}

// 3. 마지막 위치 -> 시작 위치 검사 (버그 4 수정)
if (isValid && !check(prevRow, prevCol, startRow, startCol)) {
    isValid = false;
}

// 4. 최종 결과 출력 (버그 5 수정)
console.log(isValid ? 'Valid' : 'Invalid');