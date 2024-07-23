function solution(dartResult) {
    let score = []
    let l = 0;
    for (let n of dartResult.split('')) {
        console.log(l, n, score)
        if (!isNaN(+n)) {
            if (+n === 0 && score[l - 1] === 1) {
                score.pop()
                score.push(10)
                l--
            } else score.push(+n)
            l++
        } else {
            if (n === 'D') score[l - 1] **= 2
            else if (n === 'T') score[l - 1] **= 3
            else if (n === '*') {
                score[l - 1] *= 2
                score[l - 2] *= 2
            } else if (n === '#') {
                score[l - 1] *= -1
            }
        }
    }
    return score.reduce((a, c) => a + c, 0)
}
