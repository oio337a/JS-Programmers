// 소수인지 판별하는 헬퍼 함수
function isPrime(num) {
    // 1은 소수가 아님
    if (num <= 1) {
        return false;
    }
    // 2는 유일한 짝수 소수
    if (num === 2) {
        return true;
    }
    // 짝수는 소수가 아님 (2 제외)
    if (num % 2 === 0) {
        return false;
    }
    // 3부터 제곱근까지의 홀수만 확인
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    let answer = 0;

    // 1. n을 k진법으로 변환 후 '0'을 기준으로 나눔
    const candidates = n.toString(k).split('0');

    // 2. 나눠진 숫자들에 대해 소수 판별
    for (const candidateStr of candidates) {
        // 문자열이 비어있으면 건너뜀
        if (candidateStr === "") {
            continue;
        }
        
        const num = parseInt(candidateStr, 10);
        
        if (isPrime(num)) {
            answer++;
        }
    }

    return answer;
}