function solution(a, d, included) {
    const list = new Array(included.length).fill(a).map((e, i) => e + i * d)
    return list.filter((e, i) => included[i]).reduce((a, c) => a + c, 0)
}