const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// N 의 범위는 100만 이하이므로 완전탐색으로는 풀 수 없다.
// 따라서 에라토스테네스의 체를 사용하여 소수를 판별한다.
// 판별된 소수 중에 팰린드롬인 수를 찾는다.

// 입력받기
const N = Number(input[0])

// 팰린드롬 판별 함수
// 숫자를 문자열로 변환하여 뒤집어서 원래 숫자와 같은지 확인한다.
// 시간 복잡도 O(n)
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// 소수 판별 배열
// n의 범위는 100만 이하이므로 2000001 까지 초기화한다.
// 0과 1은 소수가 아니므로 false 로 초기화한다.
const prime = Array(2000001).fill(true);
prime[0] = prime[1] = false;

// 에라토스테네스의 체
// 2부터 제곱근까지의 수로 나누어 떨어지면 소수가 아니므로 false 로 초기화한다.
// 시간 복잡도 O(n log n)
for (let i = 2; i <= Math.sqrt(2000000); i++) {
    if (prime[i]) {
        for (let j = i * i; j <= 2000000; j += i) {
            prime[j] = false;
        }
    }
}

// 정답 도출
// N 부터 2000000 까지의 수 중에서 소수이면서 팰린드롬인 수를 찾는다.
// 찾으면 바로 출력하고 종료한다.
// 시간 복잡도 O(n)
for (let i = N; i <= 2000000; i++) {
    if (prime[i] && isPalindrome(i)) {
        console.log(i);
        break;
    }
}