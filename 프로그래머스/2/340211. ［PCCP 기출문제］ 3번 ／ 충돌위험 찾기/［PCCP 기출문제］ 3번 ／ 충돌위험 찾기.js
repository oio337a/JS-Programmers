function solution(points, routes) {
    let answer = 0;
    const allPaths = []; // 모든 로봇의 시간대별 위치 기록을 담을 배열

    // 1. 각 로봇의 전체 이동 경로 구하기
    for (const route of routes) {
        const path = [];
        
        // 첫 시작 위치
        let currentIdx = route[0] - 1;
        let [r, c] = points[currentIdx];
        path.push(`${r},${c}`); // 0초일 때의 위치 기록

        // 다음 목적지들을 향해 이동
        for (let i = 1; i < route.length; i++) {
            let nextIdx = route[i] - 1;
            let [targetR, targetC] = points[nextIdx];

            // r 좌표(y축) 먼저 이동
            while (r !== targetR) {
                if (r < targetR) r++;
                else r--;
                path.push(`${r},${c}`);
            }

            // 그 다음 c 좌표(x축) 이동
            while (c !== targetC) {
                if (c < targetC) c++;
                else c--;
                path.push(`${r},${c}`);
            }
        }
        allPaths.push(path);
    }

    // 2. 시간대별로 충돌 위험 찾기
    // 가장 오래 움직인 로봇의 이동 시간을 구합니다.
    const maxTime = Math.max(...allPaths.map(p => p.length));

    for (let t = 0; t < maxTime; t++) {
        const posCount = new Map(); // 해당 시간에 각 좌표에 몇 대가 있는지 카운트

        for (const path of allPaths) {
            // 로봇이 아직 이동 중이거나 목적지에 막 도착한 상태라면 (센터를 벗어나지 않았다면)
            if (t < path.length) {
                const pos = path[t];
                posCount.set(pos, (posCount.get(pos) || 0) + 1);
            }
        }

        // 같은 시간, 같은 좌표에 2대 이상 있다면 충돌 위험 1회 증가
        for (const count of posCount.values()) {
            if (count >= 2) {
                answer++;
            }
        }
    }

    return answer;
}