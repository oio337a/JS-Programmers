function solution(n, control) {
    const d = {"w": 1, "s": -1, "d": 10, "a": -10}
    control.split('').forEach((e) => n += d[e])
    return n
}