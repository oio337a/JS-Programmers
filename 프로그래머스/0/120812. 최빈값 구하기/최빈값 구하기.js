function solution(array) {
    let temp = [...new Set(array)]
    array.sort((a, b) => a - b)
    temp = temp.map(e => [e, array.lastIndexOf(e) - array.indexOf(e)]).sort((a, b) => b[1] - a[1])
    if (temp.length === 1) return temp[0][0]
    return temp[0][1] === temp[1][1] ? -1 : temp[0][0]
}