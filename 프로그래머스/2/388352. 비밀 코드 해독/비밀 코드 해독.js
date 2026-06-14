function solution(n, q, ans) {
    let answer = 0;
    
    // DFS 함수
    // depth: 현재까지 뽑은 숫자의 개수
    // start: 다음 반복문이 시작할 숫자 (오름차순 유지를 위해)
    // currentComb: 현재까지 뽑힌 숫자들을 담은 배열
    function dfs(depth, start, currentComb) {
        // 1. 5개를 모두 뽑았다면 (Base Case)
        if (depth === 5) {
            let isValid = true; // 이 조합이 정답인지 판별하는 플래그
            
            // 2. m번의 시도(q)와 내가 만든 가설(currentComb)을 비교
            for (let i = 0; i < q.length; i++) {
                let matchCount = 0;
                
                // 가설 조합의 숫자가 q[i]에 몇 개 포함되어 있는지 카운트
                for (let num of currentComb) {
                    if (q[i].includes(num)) {
                        matchCount++;
                    }
                }
                
                // 시스템의 응답(ans[i])과 내가 센 개수가 다르면 정답 탈락!
                if (matchCount !== ans[i]) {
                    isValid = false;
                    break; // 더 이상 다른 q를 검사할 필요 없이 반복문 탈락
                }
            }
            
            // 3. 모든 시도를 통과했다면 유효한 정답 조합!
            if (isValid) {
                answer++;
            }
            
            return; // 함수 종료 후 이전 상태로 돌아감 (break 대신 return 사용)
        }
        
        // 4. 숫자 뽑기 (재귀 호출 및 백트래킹)
        for (let i = start; i <= n; i++) {
            currentComb.push(i); // 숫자를 넣고
            dfs(depth + 1, i + 1, currentComb); // 다음 숫자를 뽑으러 깊이 들어감 (start를 i+1로 줘서 오름차순 유지)
            currentComb.pop(); // 빠져나오면 방금 넣었던 숫자를 빼서 다음 숫자를 넣을 준비를 함
        }
    }
    
    // DFS 실행: 0개 뽑은 상태로, 숫자 1부터 탐색 시작, 빈 배열
    dfs(0, 1, []);
    
    return answer;
}