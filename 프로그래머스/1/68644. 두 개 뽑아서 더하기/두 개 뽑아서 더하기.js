function solution(numbers) {
    const l = numbers.length
    const answer = new Set()
    for (let i = 0; i < l - 1; i++) {
        for (let j = i + 1; j < l; j++) {
            answer.add(numbers[i] + numbers[j])
        }
    }
    return [...answer].sort((a, b) => a - b)
}