function solution(dice) {
    const n = dice.length;
    let maxWins = 0;
    let bestCombination = [];

    // 1. A가 가질 주사위 조합 구하기
    const diceIndices = Array.from({ length: n }, (_, i) => i);
    const combinations = getCombinations(diceIndices, n / 2);

    for (const aDiceIndices of combinations) {
        // A와 B의 주사위 나누기
        const bDiceIndices = diceIndices.filter(i => !aDiceIndices.includes(i));
        const aDice = aDiceIndices.map(i => dice[i]);
        const bDice = bDiceIndices.map(i => dice[i]);

        // 2. 각 플레이어의 모든 점수 합 계산
        const sumsA = [];
        const sumsB = [];
        getSums(aDice, 0, 0, sumsA);
        getSums(bDice, 0, 0, sumsB);
        
        // 3. 승리 횟수 계산 (이분 탐색 최적화)
        sumsB.sort((a, b) => a - b);
        let currentWins = 0;
        for (const sumA of sumsA) {
            // sumA보다 작은 sumB의 개수를 이분 탐색으로 찾기
            currentWins += binarySearch(sumsB, sumA);
        }

        // 4. 최대 승리 횟수 및 조합 갱신
        if (currentWins > maxWins) {
            maxWins = currentWins;
            bestCombination = aDiceIndices.map(i => i + 1); // 1-based index
        }
    }

    return bestCombination;
}

// 재귀를 이용해 모든 점수 합을 구하는 함수 (DFS)
function getSums(dice, depth, currentSum, sums) {
    if (depth === dice.length) {
        sums.push(currentSum);
        return;
    }
    for (let i = 0; i < 6; i++) {
        getSums(dice, depth + 1, currentSum + dice[depth][i], sums);
    }
}

// 재귀를 이용해 n/2개의 주사위 조합을 구하는 함수
function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map(value => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map(combination => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

// 정렬된 배열에서 target보다 작은 원소의 개수를 반환하는 이분 탐색 함수
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] >= target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}