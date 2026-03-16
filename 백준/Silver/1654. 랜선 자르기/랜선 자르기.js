const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [K, N] = input[0].split(' ').map(Number)
const lans = input.slice(1).map(Number)

let [s, e] = [1, Math.max(...lans)]

while (s <= e) {
    const mid = Math.floor((s + e) / 2)
    
    let cutting_lan_cnt = 0
    for (let lan of lans) {
        if (lan >= mid) {
            cutting_lan_cnt += Math.floor(lan / mid)
        }
    }

    if (cutting_lan_cnt < N) e = mid - 1
    else s = mid + 1
}

console.log(e)