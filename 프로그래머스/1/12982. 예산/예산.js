function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b).forEach(e => {
        if (budget >= e) {
            answer++
            budget -= e
        }
    })
    return answer
}