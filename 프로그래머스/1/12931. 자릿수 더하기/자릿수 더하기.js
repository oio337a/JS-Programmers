function solution(n) {
    return [...n.toString()].reduce((a, c) => a + +c, 0)
}