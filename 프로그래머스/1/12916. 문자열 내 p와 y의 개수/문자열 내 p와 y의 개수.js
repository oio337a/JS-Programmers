function solution(s){
    s = [...s.toLowerCase()]
    return s.reduce((a, c) => {
        if (c === 'p') return a + 1
        if (c === 'y') return a - 1
        return a
    }, 0) === 0 ? true : false
}