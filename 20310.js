const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('');

let zeroCnt = 0;
let oneCnt = 0;

// 전체 0, 1 개수 세기
for (let i = 0; i < input.length; i++) {
  if (input[i] === '0') zeroCnt++;
  else oneCnt++;
}

// 절반만 남겨야 함
const halfZero = parseInt(zeroCnt / 2);
const halfOne = parseInt(oneCnt / 2);

// 사전순 최소 문자열 만들기
// 1. 앞에서부터 제거할 1을 제거
let remainOne = halfOne;
for (let i = 0; i < input.length; i++) {
  if (input[i] === '1' && oneCnt > remainOne) {
    input[i] = 'n'; // 제거 표시
    oneCnt--;
  }
}

// 2. 뒤에서부터 제거할 0을 제거
let remainZero = halfZero;
for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] === '0' && zeroCnt > remainZero) {
    input[i] = 'n'; // 제거 표시
    zeroCnt--;
  }
}

// 최종 문자열 생성
input = input.join('').replace(/[^01]/g, '');

console.log(input);
