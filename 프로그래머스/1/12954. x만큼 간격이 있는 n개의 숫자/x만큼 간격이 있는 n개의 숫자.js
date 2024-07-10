function solution(x, n) {
    return new Array(n).fill(x).map((e, i) => e + (i * x))
}