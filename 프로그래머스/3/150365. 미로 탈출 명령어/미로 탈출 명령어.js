function solution(n, m, x, y, r, c, k) {
    // 좌표를 1-based에서 0-based로 변환
    x--; y--; r--; c--;

    // 1. 초기 경로 존재 여부 판별
    const minDist = Math.abs(x - r) + Math.abs(y - c);
    if (k < minDist || (k - minDist) % 2 !== 0) {
        return "impossible";
    }

    let answer = "";
    let curX = x;
    let curY = y;

    // 2. 탐욕법으로 경로 탐색
    for (let i = 0; i < k; i++) {
        const remainingMoves = k - i - 1;

        // 우선순위: d -> l -> r -> u
        // d (아래)
        if (curX + 1 < n && checkFeasibility(curX + 1, curY, remainingMoves)) {
            curX++;
            answer += 'd';
            continue;
        }
        // l (왼쪽)
        if (curY - 1 >= 0 && checkFeasibility(curX, curY - 1, remainingMoves)) {
            curY--;
            answer += 'l';
            continue;
        }
        // r (오른쪽)
        if (curY + 1 < m && checkFeasibility(curX, curY + 1, remainingMoves)) {
            curY++;
            answer += 'r';
            continue;
        }
        // u (위)
        if (curX - 1 >= 0 && checkFeasibility(curX - 1, curY, remainingMoves)) {
            curX--;
            answer += 'u';
            continue;
        }
    }
    
    // 특정 위치에서 남은 이동 횟수로 목적지 도달이 가능한지 확인하는 함수
    function checkFeasibility(nextX, nextY, movesLeft) {
        const dist = Math.abs(nextX - r) + Math.abs(nextY - c);
        return dist <= movesLeft && (movesLeft - dist) % 2 === 0;
    }

    return answer;
}