function solution(n, l, r) {
    // 0부터 x번째 인덱스까지의 1의 개수를 구하는 재귀 함수
    function countOnes(x) {
        // base case: x가 0이거나 첫 1단계(길이 5 이하)에 도달했을 때
        if (x === 0) return 0;
        if (x <= 5) return [0, 1, 2, 2, 3, 4][x]; 
        
        // x보다 작은 최대 5의 거듭제곱(p5)과 그때의 1의 개수(p4) 찾기
        let p5 = 1;
        let p4 = 1;
        while (p5 * 5 < x) {
            p5 *= 5;
            p4 *= 4;
        }
        
        // x가 5개의 덩어리 중 몇 번째 덩어리에 속하는지(q)와 남은 길이(rem)
        let q = Math.floor(x / p5); 
        let rem = x % p5;           
        
        if (q === 0) {
            return countOnes(rem);
        } else if (q === 1) {
            return p4 + countOnes(rem);
        } else if (q === 2) {
            // 3번째 덩어리(인덱스 2)는 모두 0이므로 남은 길이 탐색 불필요
            return p4 * 2;
        } else if (q === 3) {
            return p4 * 2 + countOnes(rem);
        } else if (q === 4) {
            return p4 * 3 + countOnes(rem);
        } else if (q === 5) { // x가 정확히 딱 맞아떨어지는 경우
            return p4 * 4;
        }
    }
    
    // r까지의 1의 개수에서 l-1까지의 1의 개수를 뺌
    return countOnes(r) - countOnes(l - 1);
}