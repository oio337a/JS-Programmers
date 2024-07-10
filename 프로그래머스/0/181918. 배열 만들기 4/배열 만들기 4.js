function solution(arr) {
    let i = 0;
    let answer = []
    while (i < arr.length) {
        if (answer[0] === undefined) {
            answer.push(arr[i]);
            i++;
        }
        else if (answer[answer.length - 1] < arr[i]) {
            answer.push(arr[i]);
            i++;
        }
        else if (answer[answer.length - 1] >= arr[i]) {
            answer.pop()
        }
    }
    return answer
}