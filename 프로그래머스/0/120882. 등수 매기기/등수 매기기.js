function solution(score) {
    let answer = new Array(score.length)
    const a = score.map(([e, m], i) => [e + m, i]).sort((a, b) => b[0] - a[0])
    let temp = {}
    a.forEach(([e, idx]) => {
        if (temp[e]) temp[e] += 1
        else temp[e] = 1
    })
    let rank = score.length + 1
    for ([e, i] of Object.entries(temp)) {
        rank -= i
        temp[e] = rank
    }
    a.forEach(([e, i]) => answer[i] = temp[e])
    return answer
}