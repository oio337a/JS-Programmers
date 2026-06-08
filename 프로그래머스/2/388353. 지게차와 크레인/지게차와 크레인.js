function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;
    
    // 1. 패딩 추가 (잘하셨습니다!)
    const check = Array.from({length: n + 2}, () => Array(m + 2).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            check[i + 1][j + 1] = storage[i][j];
        }
    }
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    for (let request of requests) {
        if (request.length === 1) { // 지게차 (외부에서부터 탐색)
            const que = [[0, 0]];
            const visited = Array.from({length: n + 2}, () => Array(m + 2).fill(false));
            visited[0][0] = true;
            
            const targets = []; // 이번에 지울 컨테이너 좌표들
            
            while (que.length) {
                const [x, y] = que.shift();
                
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    
                    // 패딩된 배열의 전체 범위(0 ~ n+1, 0 ~ m+1)를 확인
                    if (nx >= 0 && ny >= 0 && nx < n + 2 && ny < m + 2) {
                        if (!visited[nx][ny]) {
                            if (check[nx][ny] === 0) {
                                visited[nx][ny] = true; // 빈 공간이면 계속 타고 들어감
                                que.push([nx, ny]);
                            } else if (check[nx][ny] === request) {
                                visited[nx][ny] = true; // 찾던 알파벳이면 타겟에 넣고 멈춤 (더 안으로 안 들어감)
                                targets.push([nx, ny]);
                            }
                        }
                    }
                }
            }
            
            // 찾은 컨테이너들 일괄 삭제
            for (let [tx, ty] of targets) {
                check[tx][ty] = 0;
            }
            
        } else { // 크레인 (전체 순회하며 강제 삭제)
            const targetChar = request[0];
            for (let i = 0; i < n + 2; i++) {
                for (let j = 0; j < m + 2; j++) {
                    if (check[i][j] === targetChar) {
                        check[i][j] = 0;
                    }
                }
            }
        }
    }
    
    // 최종적으로 남은 컨테이너 개수 세기
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (check[i][j] !== 0) {
                answer++;
            }
        }
    }
    
    return answer;
}