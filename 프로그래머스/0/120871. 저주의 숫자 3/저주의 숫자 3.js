function solution(n) {
    let answer = 0
    for (let i = 0; i < n; i++) {
        while (answer % 3 === 0 || [...answer.toString()].includes('3')) answer++
        answer++
    }
    return --answer
}