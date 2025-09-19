const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 3개의 테스트 케이스가 연달아 들어오므로 전체 입력을 한 번에 받습니다.
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let line = 0;

function solve() {
  const N = parseInt(input[line++], 10);
  const coins = [];
  let totalSum = 0;

  for (let i = 0; i < N; i++) {
    const [value, count] = input[line++].split(' ').map(Number);
    coins.push({ value, count });
    totalSum += value * count;
  }

  // 1. 총액이 홀수이면 불가능
  if (totalSum % 2 !== 0) {
    console.log(0);
    return;
  }
  
  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  // 2. 바이너리 스플리팅으로 가상 동전 목록 생성
  const metaCoins = [];
  for (const { value, count } of coins) {
    let remainingCount = count;
    for (let k = 1; remainingCount > 0; k *= 2) {
      const take = Math.min(k, remainingCount);
      metaCoins.push(value * take);
      remainingCount -= take;
    }
  }

  // 3. 0/1 냅색 알고리즘 수행
  for (const metaCoin of metaCoins) {
    for (let j = target; j >= metaCoin; j--) {
      // dp[j-metaCoin]이 true이면, metaCoin을 더해서 j를 만들 수 있음
      dp[j] = dp[j] || dp[j - metaCoin];
    }
  }
  
  // 4. 목표 금액(총액의 절반)을 만들 수 있는지 확인
  console.log(dp[target] ? 1 : 0);
}

// 3개의 테스트 케이스를 실행
for (let i = 0; i < 3; i++) {
  solve();
}