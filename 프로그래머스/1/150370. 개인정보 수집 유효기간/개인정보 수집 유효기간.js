function solution(today, terms, privacies) {
    var answer = [];
    const now = time(today)
    
    const term = new Map()
    terms.forEach(e => {
        const [type, period] = e.split(' ')
        term.set(type, Number(period))
    })
    
    for (let i = 0; i < privacies.length; i++) {
        const [day, type] = privacies[i].split(' ')
        if (now >= time(day) + (term.get(type) * 28)) answer.push(i + 1)
    }
    return answer;
}

function time(today) {
    const [year, month, day] = today.split('.').map(Number)
    
    return (year * 12 * 28) + (month * 28) + day
}