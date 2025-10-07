function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, val) => acc + val, 0);
    const sum2 = queue2.reduce((acc, val) => acc + val, 0);
    const totalSum = sum1 + sum2;

    // 1. 총합이 홀수이면 불가능
    if (totalSum % 2 !== 0) {
        return -1;
    }

    const targetSum = totalSum / 2;
    const totalQueue = [...queue1, ...queue2];
    
    // 2. 투 포인터 초기화
    let p1 = 0; // queue1의 시작 포인터
    let p2 = queue1.length; // queue2의 시작 포인터
    
    let moves = 0;
    // 3. 무한 루프 방지를 위한 최대 이동 횟수 설정
    const limit = totalQueue.length * 2; 

    while (moves < limit) {
        if (sum1 === targetSum) {
            return moves;
        }
        
        // 4. 포인터 이동
        if (sum1 > targetSum) {
            // queue1에서 원소를 빼는 효과
            const value = totalQueue[p1];
            sum1 -= value;
            p1++;
        } else { // sum1 < targetSum
            // queue2에서 원소를 가져오는 효과
            const value = totalQueue[p2];
            sum1 += value;
            p2++;
        }
        moves++;
    }

    // 최대 이동 횟수를 초과하면 불가능
    return -1;
}