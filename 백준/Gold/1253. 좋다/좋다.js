const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = 'test.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
// 숫자가 0일 수도 있으므로, 빈 문자열이 들어오는 경우를 필터링
const nums = input[1].split(' ').map(Number);

// 숫자 배열을 오름차순으로 정렬합니다.
nums.sort((a, b) => a - b);

let goodCount = 0;

// 각 숫자가 '좋은 수'인지 판별합니다.
for (let i = 0; i < N; i++) {
  const target = nums[i];
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      // '좋은 수'는 *다른* 두 수의 합으로 이루어져야 합니다.
      // 따라서 합을 만드는 두 수의 인덱스가 현재 목표 숫자의 인덱스와 달라야 합니다.
      if (left !== i && right !== i) {
        goodCount++;
        break; // 좋은 수를 찾았으므로 다음 숫자로 넘어갑니다.
      }
      
      // 만약 포인터 중 하나가 현재 목표 숫자의 인덱스와 같다면,
      // 해당 포인터를 이동시켜 자기 자신을 포함하지 않도록 합니다.
      if (left === i) {
        left++;
      } else if (right === i) {
        right--;
      }
    } else if (currentSum < target) {
      // 합이 목표보다 작으면 더 큰 수가 필요하므로 왼쪽 포인터를 이동합니다.
      left++;
    } else {
      // 합이 목표보다 크면 더 작은 수가 필요하므로 오른쪽 포인터를 이동합니다.
      right--;
    }
  }
}

console.log(goodCount);