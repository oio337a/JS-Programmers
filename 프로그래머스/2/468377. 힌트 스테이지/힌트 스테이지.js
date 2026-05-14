function solution(cost, hint) {
    const n = cost.length;

    const memo = new Map();

    // 상태 해싱
    function encode(stage, inv) {
        let hash = stage;

        for (let i = stage; i < n; i++) {
            hash = hash * 31 + inv[i];
        }

        return hash;
    }

    function dp(stage, inv) {
        if (stage === n) return 0;

        const key = encode(stage, inv);

        if (memo.has(key)) {
            return memo.get(key);
        }

        let ans = Infinity;

        const available = Math.min(inv[stage], n - 1);

        // 번들 미리 계산
        let bundleAdded = null;

        if (stage < n - 1) {
            bundleAdded = new Uint16Array(n);

            const bundle = hint[stage];

            for (let i = 1; i < bundle.length; i++) {
                bundleAdded[bundle[i] - 1]++;
            }
        }

        for (let use = 0; use <= available; use++) {
            inv[stage] -= use;

            // 번들 구매 X
            ans = Math.min(
                ans,
                cost[stage][use] + dp(stage + 1, inv)
            );

            // 번들 구매 O
            if (bundleAdded) {
                for (let i = stage + 1; i < n; i++) {
                    inv[i] += bundleAdded[i];
                }

                ans = Math.min(
                    ans,
                    cost[stage][use] +
                        hint[stage][0] +
                        dp(stage + 1, inv)
                );

                // 복구
                for (let i = stage + 1; i < n; i++) {
                    inv[i] -= bundleAdded[i];
                }
            }

            inv[stage] += use;
        }

        memo.set(key, ans);

        return ans;
    }

    return dp(0, new Uint16Array(n));
}