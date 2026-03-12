const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const [N, M] = input[0].split(' ').map(Number)
const trees = input[1].split(' ').map(Number).sort((a, b) => a - b)

let [s, e] = [0, trees[N - 1]]

while (s <= e) {
    const mid = Math.round((s + e) / 2)

    let cut_tree = 0
    for (let tree of trees) {
        if (tree >= mid) {
            cut_tree += tree - mid
        }
    }
    if (cut_tree >= M) s = mid + 1
    else e = mid - 1
}

console.log(e)