function solution(todo_list, finished) {
    let answer = []
    return todo_list.filter((e, i) => { if (!finished[i]) return e})
}