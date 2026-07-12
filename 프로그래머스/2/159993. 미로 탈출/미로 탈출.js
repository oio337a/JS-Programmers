function solution(maps) {
    const Y = maps.length;
    const X = maps[0].length;
    
    let start, lever;
    for (let i = 0; i < Y; i++) {
        for (let j = 0; j < X; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            if (maps[i][j] === 'L') lever = [i, j];
        }
    }

    function bfs(startPos, target) {
        let check = Array.from({length: Y}, () => Array(X).fill(0));
        let que = [[startPos[0], startPos[1], 0]];
        check[startPos[0]][startPos[1]] = 1;

        let dy = [1, -1, 0, 0];
        let dx = [0, 0, 1, -1];

        while (que.length) {
            let [y, x, cnt] = que.shift();

            // 목표 지점에 도달하면 걸린 시간 반환
            if (maps[y][x] === target) {
                return cnt;
            }

            for (let i = 0; i < 4; i++) {
                let ny = y + dy[i];
                let nx = x + dx[i];

                // 벽('X')이 아니고, 방문하지 않은 곳이면 이동 (S든 E든 상관없이 통과 가능)
                if (0 <= ny && ny < Y && 0 <= nx && nx < X && !check[ny][nx] && maps[ny][nx] !== 'X') {
                    check[ny][nx] = 1;
                    que.push([ny, nx, cnt + 1]); // cnt++ 대신 cnt + 1 사용!
                }
            }
        }
        return -1; // 도달할 수 없는 경우
    }

    // 3. S -> L 까지의 거리
    let toLever = bfs(start, 'L');
    if (toLever === -1) return -1; // 레버로 못 가면 탈출 불가

    // 4. L -> E 까지의 거리 (레버 위치에서 시작)
    let toExit = bfs(lever, 'E');
    if (toExit === -1) return -1; // 출구로 못 가면 탈출 불가

    // 5. 총 걸린 시간 반환
    return toLever + toExit;
}