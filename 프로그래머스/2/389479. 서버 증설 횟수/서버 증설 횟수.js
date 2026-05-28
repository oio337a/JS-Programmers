function solution(players, m, k) {
    var answer = 0;
    
    const check = new Array(24).fill(1)
    for (let i = 0; i<24; i++) {
        const player = players[i]
        const cur_limit = check[i] * m
        if (player >= cur_limit) {
            const temp = player - cur_limit
            const add_server = Math.floor(temp / m) + 1
            answer += add_server
            for (let j=0; j<k; j++) check[i+j] += add_server
            
            console.log(check, 'answer', answer, 'i',i)
        }
    }
    return answer;
}