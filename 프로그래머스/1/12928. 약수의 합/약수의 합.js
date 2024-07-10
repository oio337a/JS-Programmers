function solution(n) {
    return new Array(n).fill(1).map((e, i) => e + i).filter((_, i) => n % (i + 1) === 0).reduce((a, c) => a + c, 0)
}