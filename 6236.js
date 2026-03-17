const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const [N, M] = input[0].split(' ').map(Number)
const list = input.slice(1).map(Number)

let s = Math.max(...list)
let e = list.reduce((a, b) => a + b, 0)

while (s <= e) {
    const mid = Math.floor((s + e) / 2)

    let cur_money = 0
    let cnt_withdrawal = 0

    for (let li of list) {
        if (li > cur_money) {
            cnt_withdrawal++
            cur_money = mid - li
        } else cur_money -= li
    }

    if (cnt_withdrawal > M) s = mid + 1
    else e = mid - 1
}

console.log(s)