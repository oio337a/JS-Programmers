function solution(cost, hint) {
    const n = cost.length;

    let answer = Infinity;

    // 현재 보유 힌트권
    const tickets = new Uint16Array(n);

    // 메모이제이션
    const memo = new Map();

    // 상태 압축
    function encode(stage) {
        let key = stage;

        for (let i = stage; i < n; i++) {
            key = key * 31 + tickets[i];
        }

        return key;
    }

    function dfs(stage, totalCost) {
        // 종료
        if (stage === n) {
            answer = Math.min(answer, totalCost);
            return;
        }

        // 가지치기
        if (totalCost >= answer) return;

        // 상태 체크
        const key = encode(stage);

        if (memo.has(key) && memo.get(key) <= totalCost) {
            return;
        }

        memo.set(key, totalCost);

        const maxUse = Math.min(tickets[stage], n - 1);

        // 번들 정보
        let bundle = null;
        let bundlePrice = 0;

        if (stage < n - 1) {
            bundle = hint[stage];
            bundlePrice = bundle[0];
        }

        // 비용 감소폭이 큰 순서로 탐색하면 pruning 잘됨
        for (let use = maxUse; use >= 0; use--) {
            const stageCost = cost[stage][use];

            // 힌트 사용
            tickets[stage] -= use;

            // 1. 번들 미구매
            dfs(stage + 1, totalCost + stageCost);

            // 2. 번들 구매
            if (bundle) {
                for (let i = 1; i < bundle.length; i++) {
                    tickets[bundle[i] - 1]++;
                }

                dfs(
                    stage + 1,
                    totalCost + stageCost + bundlePrice
                );

                // 복구
                for (let i = 1; i < bundle.length; i++) {
                    tickets[bundle[i] - 1]--;
                }
            }

            // 복구
            tickets[stage] += use;
        }
    }

    dfs(0, 0);

    return answer;
}