function solution(k, score) {
    return score.map((e, i) => {
        let temp = score.slice(0, i + 1).sort((a, b) => b - a)
        return i >= k ? temp[k - 1] : temp[i]
    })    
    
}