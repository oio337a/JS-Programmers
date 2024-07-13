function solution(s) {
    let answer = []
    for (let i = s.length - 1; i > 0; i--) {
        let idx = s.slice(0, i).lastIndexOf(s[i])
        idx === -1 ? answer.unshift(-1) : answer.unshift(i - idx)
    }
    return [-1, ...answer]
}