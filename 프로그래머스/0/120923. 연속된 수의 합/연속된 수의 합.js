function solution(n, total) {
    let m = (((total * 2) / n) + n - 1) / 2
    return new Array(n).fill(m).map((e, i) => e - i).sort((a, b) => a - b)
}