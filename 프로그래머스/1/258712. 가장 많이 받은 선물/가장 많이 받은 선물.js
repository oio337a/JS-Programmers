function solution(friends, gifts) {
    const n = friends.length;
    if (n < 2) {
        return 0;
    }

    // 1. 초기화 단계
    // 이름과 배열 인덱스를 매핑
    const nameMap = new Map(friends.map((name, index) => [name, index]));
    
    // 주고받은 선물 기록 (2차원 배열)
    // record[i][j] = i가 j에게 준 선물의 수
    const record = Array.from({ length: n }, () => Array(n).fill(0));
    
    // 선물 지수 (1차원 배열)
    const giftIndex = Array(n).fill(0);
    
    // 다음 달에 받을 선물 수 (1차원 배열)
    const nextMonth = Array(n).fill(0);

    // 2. 선물 기록 처리
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(' ');
        const giverIndex = nameMap.get(giver);
        const receiverIndex = nameMap.get(receiver);
        
        record[giverIndex][receiverIndex]++;
    }

    // 3. 선물 지수 계산
    for (let i = 0; i < n; i++) {
        let given = 0;
        let received = 0;
        for (let j = 0; j < n; j++) {
            given += record[i][j];    // i가 준 선물 총합
            received += record[j][i]; // i가 받은 선물 총합
        }
        giftIndex[i] = given - received;
    }
    
    // 4. 다음 달 받을 선물 예측
    // 모든 친구 쌍을 한 번씩만 비교 (i < j)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const givenFromIToJ = record[i][j];
            const givenFromJToI = record[j][i];

            // 규칙 1: 더 많은 선물을 준 사람이 받음
            if (givenFromIToJ > givenFromJToI) {
                nextMonth[i]++;
            } else if (givenFromJToI > givenFromIToJ) {
                nextMonth[j]++;
            } else {
                // 규칙 2: 선물 지수가 더 큰 사람이 받음
                const indexI = giftIndex[i];
                const indexJ = giftIndex[j];

                if (indexI > indexJ) {
                    nextMonth[i]++;
                } else if (indexJ > indexI) {
                    nextMonth[j]++;
                }
            }
        }
    }

    // 5. 결과 반환
    return Math.max(0, ...nextMonth);
}