function solution(users, emoticons) {
    const discountRates = [10, 20, 30, 40];
    const numEmoticons = emoticons.length;
    
    // 최종 결과를 저장할 변수 [플러스 가입자 수, 총 판매액]
    let bestResult = [0, 0];

    // DFS 함수 정의
    // discounts: 현재까지 결정된 이모티콘별 할인율 배열
    function dfs(discounts) {
        // 1. 모든 이모티콘의 할인율이 결정되었을 때
        if (discounts.length === numEmoticons) {
            let currentSubscribers = 0;
            let currentSales = 0;

            // 2. 각 사용자마다 구매 시뮬레이션
            for (const user of users) {
                const [userRate, userBudget] = user;
                let userPurchase = 0;
                
                for (let i = 0; i < numEmoticons; i++) {
                    // 사용자의 기준 할인율 이상인 이모티콘만 구매
                    if (discounts[i] >= userRate) {
                        userPurchase += emoticons[i] * (100 - discounts[i]) / 100;
                    }
                }

                // 플러스 서비스 가입 여부 결정
                if (userPurchase >= userBudget) {
                    currentSubscribers++;
                } else {
                    currentSales += userPurchase;
                }
            }

            // 3. 결과 갱신
            // 가입자 수가 더 많으면 무조건 갱신
            if (currentSubscribers > bestResult[0]) {
                bestResult = [currentSubscribers, currentSales];
            } 
            // 가입자 수가 같으면 판매액이 더 많을 때만 갱신
            else if (currentSubscribers === bestResult[0] && currentSales > bestResult[1]) {
                bestResult = [currentSubscribers, currentSales];
            }
            
            return;
        }

        // 재귀 호출 부분
        for (const rate of discountRates) {
            discounts.push(rate); // 현재 이모티콘에 할인율 적용
            dfs(discounts);
      discounts.pop();  // 백트래킹: 다음 할인율을 시도하기 위해 마지막에 넣은 할인율 제거
        }
    }
    
    // DFS 시작
    dfs([]);
    
    return bestResult;
}