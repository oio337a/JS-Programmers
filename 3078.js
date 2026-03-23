const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\r\n");

const [N, K] = input[0].split(" ").map(Number);
const names = input.slice(1);

let countByLength = Array(21).fill(0); // 이름 길이별 카운트 (2~20)
let queue = []; // 최근 K명 저장 (길이만 저장)
let result = 0;

for (let i = 0; i < N; i++) {
  const len = names[i].length;

  // 큐에 K 범위를 벗어난 학생 제거
  if (queue.length > K) {
    const removed = queue.shift();
    countByLength[removed]--;
  }

  // 현재 학생과 같은 길이의 친구 수 더하기
  result += countByLength[len];

  // 현재 학생 추가
  queue.push(len);
  countByLength[len]++;
}

console.log(result);