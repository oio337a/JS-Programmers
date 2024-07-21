function solution(n, m, section) {
    let answer = 0;
    let temp = 0
    section.forEach((e, i) => {
        if (temp < e) {
            answer++
            temp = e + m - 1
        }
    })
    return answer
}
