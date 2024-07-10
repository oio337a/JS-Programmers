function solution(arr) {
    let i = 0;
    let answer = [];
    while (i < arr.length) {
        if (answer[0] === undefined) answer.push(arr[i++])
        else if (answer[answer.length - 1] === arr[i]) {
            answer.pop()
            i++
        }
        else answer.push(arr[i++])
    }
    return answer[0] === undefined ? [-1] : answer;
}