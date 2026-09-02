function solution(weights) {
    let answer = 0;
    // 몸무게의 범위가 100 ~ 1000이므로 크기가 1001인 배열 생성
    const counts = new Array(1001).fill(0);
    
    // 각 몸무게별 인원수를 카운트
    for (let i = 0; i < weights.length; i++) {
        counts[weights[i]]++;
    }
    
    // 100부터 1000까지 순회하며 가능한 짝꿍 조합 찾기
    for (let i = 100; i <= 1000; i++) {
        if (counts[i] === 0) continue;
        
        // 1. 몸무게가 같은 경우 (1:1 비율)
        // n명 중 2명을 뽑는 조합의 수: n * (n - 1) / 2
        if (counts[i] > 1) {
            answer += (counts[i] * (counts[i] - 1)) / 2;
        }
        
        // 2. 다른 몸무게와 짝꿍이 되는 경우 (작은 몸무게 기준 큰 몸무게 탐색)
        // 시소의 거리 비율 조합은 3/4, 2/3, 1/2이므로 몸무게 비율은 그 역수인 4/3, 3/2, 2배가 됨
        const w1 = i;
        
        // 3m - 4m 좌석 (비율 4/3)
        const w2_1 = (w1 * 4) / 3;
        if (Number.isInteger(w2_1) && w2_1 <= 1000 && counts[w2_1] > 0) {
            answer += counts[w1] * counts[w2_1];
        }
        
        // 2m - 3m 좌석 (비율 3/2)
        const w2_2 = (w1 * 3) / 2;
        if (Number.isInteger(w2_2) && w2_2 <= 1000 && counts[w2_2] > 0) {
            answer += counts[w1] * counts[w2_2];
        }
        
        // 2m - 4m 좌석 (비율 2)
        const w2_3 = w1 * 2;
        if (w2_3 <= 1000 && counts[w2_3] > 0) {
            answer += counts[w1] * counts[w2_3];
        }
    }
    
    return answer;
}