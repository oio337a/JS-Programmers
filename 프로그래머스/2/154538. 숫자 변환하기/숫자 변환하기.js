function solution(x, y, n) {
    // 1. 이미 x와 y가 같다면 연산이 필요 없음
    if (x === y) return 0;
    
    // 2. 최소 연산 횟수를 저장할 dp 배열을 무한대(Infinity)로 초기화
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0; // 시작 위치의 연산 횟수는 0
    
    // 3. x부터 y까지 순회
    for (let i = x; i <= y; i++) {
        // 도달할 수 없는 숫자(Infinity)는 계산하지 않고 건너뜀
        if (dp[i] === Infinity) continue;
        
        // 현재 위치(i)에서 각 연산을 수행했을 때 y를 넘지 않으면 값 갱신
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }
    
    // 4. y 인덱스의 값이 초기값(Infinity) 그대로라면 도달 불가능하므로 -1 반환
    return dp[y] === Infinity ? -1 : dp[y];
}