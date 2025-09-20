const fs = require('fs');
// 백준 제출 시 경로는 '/dev/stdin'으로 변경해야 합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt);

/**
 * 1부터 N까지의 모든 정수에서 1의 총 개수를 세는 함수
 * @param {BigInt} n
 * @returns {BigInt}
 */
function countSetBits(n) {
  if (n <= 0n) {
    return 0n;
  }
  
  // n을 이진수 문자열로 변환하여 길이를 구함
  const bin_n = n.toString(2);
  const len = bin_n.length;
  
  let totalOnes = 0n;

  // 각 비트 자리(0부터 len-1까지)를 순회
  for (let i = 0; i < len; i++) {
    // 현재 비트 자리의 값 (2^i)
    const pos_val = 1n << BigInt(i);
    
    // 주기의 길이 (2^(i+1))
    const cycle_len = 1n << BigInt(i + 1);
    
    // 1. 완전한 주기에 포함된 1의 개수 계산
    const num_cycles = (n + 1n) / cycle_len;
    totalOnes += num_cycles * pos_val;
    
    // 2. 나머지 부분에 포함된 1의 개수 계산
    const remainder = (n + 1n) % cycle_len;
    if (remainder > pos_val) {
      totalOnes += remainder - pos_val;
    }
  }
  
  return totalOnes;
}

const result = countSetBits(B) - countSetBits(A - 1n);
console.log(result.toString());