function solution(babbling) {
    const lang = ["aya", "ye", "woo", "ma"]
    let answer = []
    for (bab of babbling) {
        lang.forEach((e, i) => {
            bab = bab.replace(e, ' ')
        })
        answer.push(bab.replaceAll(' ', ''))
    }
    return answer.filter(e => !e).length
}