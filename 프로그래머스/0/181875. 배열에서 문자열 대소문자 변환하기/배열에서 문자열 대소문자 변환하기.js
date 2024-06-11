function solution(strArr) {
    return strArr.map((e, i) => i % 2 === 0 ? e.toLowerCase() : e.toUpperCase())
}