function solution(k, m, score) {
    let answer = 0
    let a = score.sort((a, b) => b - a)
    for (let i = 0; i < ~~(score.length / m) * m; i += m) {
        let min = Math.min(...a.slice(i, i + m))
        answer += (min > k ? k : min) * m
    }
    return answer
}