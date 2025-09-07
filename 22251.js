const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\r\n");

const [N, K, P, X] = input[0].split(" ").map(Number);

// 7-seg 패턴 (0~9)
const seg = [
  "1111110", // 0
  "0110000", // 1
  "1101101", // 2
  "1111001", // 3
  "0110011", // 4
  "1011011", // 5
  "1011111", // 6
  "1110000", // 7
  "1111111", // 8
  "1111011", // 9
];

// 두 숫자의 LED 차이 계산
const diff = Array.from({ length: 10 }, () => Array(10).fill(0));
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let cnt = 0;
    for (let k = 0; k < 7; k++) {
      if (seg[i][k] !== seg[j][k]) cnt++;
    }
    diff[i][j] = cnt;
  }
}

// X를 K자리 문자열로 변환
const toDigitArr = (num) => {
  let s = num.toString().padStart(K, "0");
  return s.split("").map(Number);
};

const targetDigits = toDigitArr(X);

let answer = 0;

for (let floor = 1; floor <= N; floor++) {
  if (floor === X) continue; // 자기 자신은 제외
  const digits = toDigitArr(floor);

  let totalDiff = 0;
  for (let i = 0; i < K; i++) {
    totalDiff += diff[targetDigits[i]][digits[i]];
    if (totalDiff > P) break; // 이미 초과
  }

  if (totalDiff <= P) answer++;
}

console.log(answer);
