function solution(n) {
    const list = Array(n).fill(1).map((e, i) => e + i)
    if (n % 2 === 0) {
        return list.reduce((a, c) => c % 2 === 0 ? a += c*c : a, 0)
    } else {
        return list.reduce((a, c) => c % 2 !== 0 ? a += c : a, 0)
    }
    return 0;
}