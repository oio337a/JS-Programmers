function solution(numbers) {
    const answer = [];

    // 재귀적으로 트리의 유효성을 검사하는 함수
    const canBeTree = (binaryStr) => {
        // 기저 사례: 노드가 하나면 항상 유효
        if (binaryStr.length === 1) {
            return true;
        }

        const mid = Math.floor(binaryStr.length / 2);
        const root = binaryStr[mid];
        
        const leftSubtree = binaryStr.substring(0, mid);
        const rightSubtree = binaryStr.substring(mid + 1);

        // 핵심 규칙: 부모가 0인데 자식 중에 1이 있으면 안 됨
        if (root === '0') {
            // 왼쪽 또는 오른쪽 서브트리에 1이 있는지 확인
            if (leftSubtree.includes('1') || rightSubtree.includes('1')) {
                return false;
            }
        }
        
        // 현재 트리가 유효하다면, 자식 트리들도 재귀적으로 검사
        return canBeTree(leftSubtree) && canBeTree(rightSubtree);
    };

    for (const num of numbers) {
        // 1. 숫자를 이진 문자열로 변환
        const binaryStr = num.toString(2);
        const len = binaryStr.length;

        // 2. 포화 이진트리의 길이 계산
        let totalLen = 1;
        let h = 1;
        while (totalLen < len) {
            h *= 2;
            totalLen += h;
        }
        
        // 3. 0을 덧붙여 포화 이진트리 길이로 만들기
        const paddedStr = binaryStr.padStart(totalLen, '0');

        // 4. 유효성 검사 후 결과 추가
        if (canBeTree(paddedStr)) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }

    return answer;
}