function solution(quiz) {
    let answer = [];
    quiz = quiz.map(e => {
         [a, cal, b, res] = e.replace('= ', '').split(' ')
         return cal === '+' ? +a + +b === +res : +a - +b === +res
    })
    return quiz.map(e => e ? 'O' : 'X')
}