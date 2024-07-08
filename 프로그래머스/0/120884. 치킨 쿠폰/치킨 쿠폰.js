function solution(chicken) {
    let answer = 0
    while (1) {
        let a = Math.floor(chicken / 10)
        answer += a
        chicken = a + (chicken % 10)
        if (chicken < 10) break
    }
    return answer
}