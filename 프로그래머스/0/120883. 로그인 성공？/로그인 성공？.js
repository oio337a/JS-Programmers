function solution(id_pw, db) {
    [id, pw] = id_pw
    let flag = 0
    db.forEach(([i, p]) => {
        if (id === i && pw === p) flag = 1
        else {
            if (id === i) flag = 2
        }
    })
    switch (flag) {
        case 0: return 'fail'
        case 1: return 'login'
        case 2: return 'wrong pw'
    }
}