const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
const budget_list = input[1].split(' ').map(Number).sort((a, b) => a - b)
const max_budget = Number(input[2])

let [s, e] = [0, budget_list[N - 1]]

while(s <= e) {
    const mid = Math.round((s + e) / 2)

    let cnt_budget = 0
    for (let budget of budget_list) {
        if (budget > mid) cnt_budget += mid
        else cnt_budget += budget
    }
    if (cnt_budget > max_budget) e = mid - 1
    else s = mid + 1
}

console.log(e)