function solution(s) {
    let answer = []
    let target = s[0]
    let a = 1
    let b = 0
    let start = 0
    for (let i = 1; i < s.length; i++) {
        if (target === s[i]) a++
        else b++
        if (a === b) {
            answer.push(s.slice(start,i+1))
            target = s[i + 1]
            start = i + 1
        }
    }
    const l = answer.length
    return s.length > start ? l + 1 : l
}