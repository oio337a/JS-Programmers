const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const [N, M] = input[0].split(' ').map(Number)

const keyword = new Map()
let cnt = N
let answer = []
for (let i = 0; i < N; i++) {
    keyword.set(input[i + 1], 1)
}

for (let i = N + 1; i <= N + M; i++) {
    const temp = input[i].split(',')

    for (const t of temp) {
        if (keyword.get(t) === 1) {
            cnt--
            keyword.set(t, 2)
        }
    }
    answer.push(cnt)
}

console.log(answer.join('\n'))