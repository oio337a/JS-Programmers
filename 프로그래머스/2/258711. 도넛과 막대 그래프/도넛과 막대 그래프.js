function solution(edges) {
    const answer = [0, 0, 0, 0];
    const exchange = new Map(); // 각 노드의 [준 횟수, 받은 횟수] = [out-degree, in-degree]

    // 1. 모든 노드의 out-degree와 in-degree 계산
    for (const [give, receive] of edges) {
        if (!exchange.has(give)) {
            exchange.set(give, [0, 0]);
        }
        if (!exchange.has(receive)) {
            exchange.set(receive, [0, 0]);
        }
        exchange.get(give)[0] += 1;
        exchange.get(receive)[1] += 1;
    }

    let totalGraphs = 0;

    // 2. 생성된 정점과 각 그래프 타입의 개수 찾기
    for (const [nodeNum, degrees] of exchange.entries()) {
        const [outDegree, inDegree] = degrees;

        // 생성된 정점 찾기: out-degree >= 2, in-degree === 0
        if (outDegree >= 2 && inDegree === 0) {
            answer[0] = nodeNum;
            totalGraphs = outDegree; // 생성된 정점의 out-degree가 전체 그래프의 수
        }
        // 막대 그래프 찾기: out-degree === 0
        else if (outDegree === 0) {
            answer[2]++;
        }
        // 8자 그래프 찾기: out-degree === 2, in-degree >= 2
        else if (outDegree === 2 && inDegree >= 2) {
            answer[3]++;
        }
    }

    // 3. 도넛 그래프 개수 계산
    // 전체 그래프 수 = 도넛 + 막대 + 8자
    answer[1] = totalGraphs - answer[2] - answer[3];
    
    return answer;
}