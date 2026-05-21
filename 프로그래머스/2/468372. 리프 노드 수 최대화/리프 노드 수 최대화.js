function solution(dist_limit, split_limit) {
    let max_leaves = 1;

    // 2의 개수(cnt2)와 3의 개수(cnt3)의 가능한 모든 조합을 탐색합니다.
    for (let cnt2 = 0; cnt2 <= 30; cnt2++) {
        for (let cnt3 = 0; cnt3 <= 19; cnt3++) {
            
            // 현재 조합의 분배도 곱이 split_limit를 초과하면 불가능한 구성
            let prod = (2 ** cnt2) * (3 ** cnt3);
            if (prod > split_limit) continue;

            let leaves = 1;         // 초기 트리는 자식 노드(리프) 1개로 시작
            let D = dist_limit;     // 사용 가능한 분배 노드의 수
            let M = 1;              // 현재 깊이에서 분배 노드로 바꿀 수 있는 예비 노드의 수

            // 1. 자식 수가 2인 분배 노드들 먼저 배치 (분배 노드 효율 극대화)
            for (let i = 0; i < cnt2; i++) {
                if (D >= M) {
                    // 가용한 분배 노드가 충분하다면 현재 깊이의 모든 노드를 분배 노드로 변환
                    leaves += M * 1; // 각 분배 노드당 리프 노드 1개씩 순증가 (2 - 1)
                    D -= M;
                    M *= 2;          // 다음 깊이로 넘어갈 노드 수 2배 증가
                } else {
                    // 가용한 분배 노드가 부족하다면 있는 만큼만 변환
                    leaves += D * 1;
                    D = 0;
                    break;
                }
            }

            // 2. 자식 수가 3인 분배 노드들 이어서 배치
            if (D > 0) {
                for (let i = 0; i < cnt3; i++) {
                    if (D >= M) {
                        leaves += M * 2; // 각 분배 노드당 리프 노드 2개씩 순증가 (3 - 1)
                        D -= M;
                        M *= 3;          // 다음 깊이로 넘어갈 노드 수 3배 증가
                    } else {
                        leaves += D * 2;
                        D = 0;
                        break;
                    }
                }
            }

            // 최대 리프 노드 수 갱신
            if (leaves > max_leaves) {
                max_leaves = leaves;
            }
        }
    }

    return max_leaves;
}