function solution(babbling) {
    const v = ["aya", "ye", "woo", "ma"]
    const l = babbling.length
    
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < 4; j++) {
            babbling[i] = babbling[i].replaceAll(v[j], j)
        }
    }
    return babbling.filter(e => {
        let temp = e.split('').map(Number)
        let temp_len = temp.length
        for (let i = 0; i < temp_len; i++) {
            if (isNaN(temp[i])) return false
            if (i < temp_len - 1 && temp[i] === temp[i + 1]) return false
        }
        return true
    }).length
}