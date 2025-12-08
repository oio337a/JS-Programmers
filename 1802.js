const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const T = parseInt(input[0], 10);
let result = '';

/**
 * 주어진 문자열이 유효한 접기 패턴인지 재귀적으로 확인하는 함수
 * @param {string} paper
 * @returns {boolean}
 */
function check(paper) {
    const len = paper.length;

    // 기저 사례: 길이가 1이면 유효한 최소 단위이므로 성공
    if (len === 1) {
        return true;
    }
    
    // 유효하지 않은 상태: 길이가 0이거나 짝수이면 실패
    // (올바른 패턴은 항상 홀수 길이를 가짐)
    if (len === 0 || len % 2 === 0) {
        return false;
    }

    // 이 시점에서 len은 3, 5, 7 ... 등의 홀수
    const mid = Math.floor(len / 2);
    const left = paper.substring(0, mid);
    const right = paper.substring(mid + 1);

    // 1. 대칭성 검사
    for (let i = 0; i < mid; i++) {
        if (left[i] === right[mid - 1 - i]) {
            return false; // 좌우 대칭 지점의 주름 방향이 같으면 실패
        }
    }

    // 2. 재귀적으로 하위 문제 검사
    // left와 right는 다시 홀수 길이를 가지게 됨
    return check(left) && check(right);
}

for (let i = 1; i <= T; i++) {
    const paper = input[i];
    if (check(paper)) {
        result += 'YES\n';
    } else {
        result += 'NO\n';
    }
}

console.log(result.trim());