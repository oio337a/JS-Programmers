function solution(N, stages) {
    let answer = []
    let l = stages.length
    let a = stages.sort((a, b) => a - b)
    for (let i = 1; i <= N; i++) {
        const cnt = a.indexOf(i) === -1 ? 0 : a.lastIndexOf(i) - a.indexOf(i) + 1
        answer.push([cnt / l, i])
        l -= cnt
    }
    return answer.sort((a, b) => b[0] - a[0]).map(([e, i]) => i)
}