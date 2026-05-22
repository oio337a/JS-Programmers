function solution(info, n, m) {
    // dp[a] = A의 흔적이 a일 때, 가능한 B의 흔적 중 최솟값
    let dp = new Array(n).fill(Infinity);
    dp[0] = 0; // 시작 시 두 도둑의 흔적은 모두 0
    
    for (let i = 0; i < info.length; i++) {
        const traceA = info[i][0];
        const traceB = info[i][1];
        
        // 현재 물건을 훔친 후의 상태를 저장할 새 배열
        let next_dp = new Array(n).fill(Infinity);
        
        for (let a = 0; a < n; a++) {
            if (dp[a] !== Infinity) {
                // 1. A도둑이 훔치는 경우
                if (a + traceA < n) {
                    next_dp[a + traceA] = Math.min(next_dp[a + traceA], dp[a]);
                }
                
                // 2. B도둑이 훔치는 경우
                if (dp[a] + traceB < m) {
                    next_dp[a] = Math.min(next_dp[a], dp[a] + traceB);
                }
            }
        }
        
        // 상태 업데이트
        dp = next_dp;
    }
    
    // A의 흔적(a)이 가장 작은 것부터 순회하여 최솟값을 찾음
    for (let a = 0; a < n; a++) {
        if (dp[a] !== Infinity) {
            return a;
        }
    }
    
    // 모든 방법을 시도해도 두 도둑 모두 붙잡히지 않는 경우가 없다면 -1 반환
    return -1;
}