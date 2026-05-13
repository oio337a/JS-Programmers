function solution(m, n, h, w, drops) {
    const board = Array.from({ length: m }, () => Array(n).fill(Infinity));

    for (let i = 0; i < drops.length; i++) {
        const [r, c] = drops[i];
        board[r][c] = i + 1;
    }

    const W = n - w + 1;

    // 가로 최소값
    const rowMin = Array.from({ length: m }, () => Array(W));

    for (let r = 0; r < m; r++) {
        const deque = new Array(n);
        let head = 0;
        let tail = 0;

        for (let c = 0; c < n; c++) {
            while (
                head < tail &&
                board[r][deque[tail - 1]] >= board[r][c]
            ) {
                tail--;
            }

            deque[tail++] = c;

            if (deque[head] <= c - w) {
                head++;
            }

            if (c >= w - 1) {
                rowMin[r][c - w + 1] = board[r][deque[head]];
            }
        }
    }

    let bestTime = -1;
    let bestR = Infinity;
    let bestC = Infinity;

    // 세로 최소값
    for (let c = 0; c < W; c++) {
        const deque = new Array(m);
        let head = 0;
        let tail = 0;

        for (let r = 0; r < m; r++) {
            while (
                head < tail &&
                rowMin[deque[tail - 1]][c] >= rowMin[r][c]
            ) {
                tail--;
            }

            deque[tail++] = r;

            if (deque[head] <= r - h) {
                head++;
            }

            if (r >= h - 1) {
                const sr = r - h + 1;
                const t = rowMin[deque[head]][c];

                if (
                    t > bestTime ||
                    (t === bestTime &&
                        (sr < bestR ||
                            (sr === bestR && c < bestC)))
                ) {
                    bestTime = t;
                    bestR = sr;
                    bestC = c;
                }
            }
        }
    }

    return [bestR, bestC];
}