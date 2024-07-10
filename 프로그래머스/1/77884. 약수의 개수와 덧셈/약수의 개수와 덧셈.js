function solution(left, right) {
    let answer = []
    for (let i = left; i <= right; i++) {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) cnt++
        }
        answer.push([i, cnt])
    }
    return answer.reduce((a, c) => c[1] % 2 ? a - c[0] : a + c[0], 0)
}