function solution(food) {
    let answer = [0]
    for (let i = food.length; i > 0; i--) {
        let cnt = ~~(food[i] / 2)
        answer.push((i + '').repeat(cnt))
        answer.unshift((i + '').repeat(cnt))
    }
    return answer.join('')
}