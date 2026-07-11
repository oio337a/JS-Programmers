function solution(m, n, startX, startY, balls) {
    var answer = [];

    for (let [x, y] of balls) {
        let minDistance = Infinity; // 최솟값을 찾기 위해 처음엔 무한대로 설정

        // 1. 왼쪽 벽을 향해 치는 경우
        // 예외: y좌표가 같고, 목표 공(x)이 내 공(startX)보다 왼쪽에 있으면 공에 먼저 맞음
        if (!(startY === y && x < startX)) {
            let dist = (startX - (-x)) ** 2 + (startY - y) ** 2;
            minDistance = Math.min(minDistance, dist);
        }

        // 2. 오른쪽 벽을 향해 치는 경우
        // 예외: y좌표가 같고, 목표 공(x)이 내 공(startX)보다 오른쪽에 있으면 공에 먼저 맞음
        if (!(startY === y && x > startX)) {
            let dist = (startX - (2 * m - x)) ** 2 + (startY - y) ** 2;
            minDistance = Math.min(minDistance, dist);
        }

        // 3. 아래쪽 벽을 향해 치는 경우
        // 예외: x좌표가 같고, 목표 공(y)이 내 공(startY)보다 아래에 있으면 공에 먼저 맞음
        if (!(startX === x && y < startY)) {
            let dist = (startX - x) ** 2 + (startY - (-y)) ** 2;
            minDistance = Math.min(minDistance, dist);
        }

        // 4. 위쪽 벽을 향해 치는 경우
        // 예외: x좌표가 같고, 목표 공(y)이 내 공(startY)보다 위에 있으면 공에 먼저 맞음
        if (!(startX === x && y > startY)) {
            let dist = (startX - x) ** 2 + (startY - (2 * n - y)) ** 2;
            minDistance = Math.min(minDistance, dist);
        }

        answer.push(minDistance);
    }

    return answer;
}