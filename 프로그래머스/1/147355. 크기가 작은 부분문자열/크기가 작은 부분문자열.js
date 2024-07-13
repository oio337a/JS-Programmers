function solution(t, p) {
    const l = p.length
    let answer = 0
    for (let i = 0; i <= t.length - l; i++) if (+t.slice(i, i + l) <= +p) answer++;
    return answer
}