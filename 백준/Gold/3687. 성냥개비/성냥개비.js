// 백준에서 입력을 받기 위한 설정
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 테스트 케이스의 수
const T = parseInt(input[0]);
// 실제 성냥개비 개수가 담긴 배열
const cases = input.slice(1).map(Number);

// --- 최소값 구하기 (DP) ---
// dp 배열 초기화. dp[i]는 성냥개비 i개로 만들 수 있는 가장 작은 수.
const min_dp = Array(101);
min_dp[2] = '1';
min_dp[3] = '7';
min_dp[4] = '4';
min_dp[5] = '2';
min_dp[6] = '6';
min_dp[7] = '8';

// 각 성냥개비 수로 만들 수 있는 숫자 (맨 앞자리에 0이 올 경우 포함)
const match = { 2: '1', 3: '7', 4: '4', 5: '2', 6: '0', 7: '8' };

// dp 테이블 채우기 (8개부터 100개까지)
for (let i = 8; i <= 100; i++) {
  let min_val = BigInt('1'.repeat(51)); // 비교를 위한 매우 큰 BigInt 초기값

  for (const [sticks, digit] of Object.entries(match)) {
    const prev_i = i - parseInt(sticks);
    if (prev_i >= 2) {
      // (i - sticks)개로 만든 수 뒤에 새로운 숫자를 붙여 후보 생성
      const candidate = BigInt(min_dp[prev_i] + digit);
      if (candidate < min_val) {
        min_val = candidate;
      }
    }
  }
  min_dp[i] = min_val.toString();
}


// --- 각 테스트 케이스에 대한 결과 계산 ---
let answer = '';
for (const n of cases) {
  // 1. 최소값 가져오기
  const min_val = min_dp[n];

  // 2. 최대값 계산하기 (Greedy)
  let max_val;
  if (n % 2 === 0) {
    // 짝수: '1'을 n/2번 반복
    max_val = '1'.repeat(n / 2);
  } else {
    // 홀수: 맨 앞에 '7'을 놓고, 나머지 (n-3)개로 '1'을 반복
    max_val = '7' + '1'.repeat((n - 3) / 2);
  }

  answer += `${min_val} ${max_val}\n`;
}

// 최종 결과 출력
console.log(answer.trim());