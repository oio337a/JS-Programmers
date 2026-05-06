function solution(ingredient) {
    let stack = [];
    let count = 0;

    for (let item of ingredient) {
        stack.push(item);

        // 스택의 마지막 4개가 [1,2,3,1]인지 확인
        if (stack.length >= 4) {
            let lastFour = stack.slice(-4);
            if (lastFour[0] === 1 && lastFour[1] === 2 && lastFour[2] === 3 && lastFour[3] === 1) {
                // 햄버거 완성 → 마지막 4개 제거
                stack.splice(-4);
                count++;
            }
        }
    }

    return count;
}