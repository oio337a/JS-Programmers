function solution(s) {
    const l = s.length
    if (l % 2) return s[~~(l / 2)]
    return s.slice(~~(l / 2) - 1, ~~(l / 2) + 1)
}