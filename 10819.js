const fs = require('fs');
// 백준 제출 시에는 아래 경로로 바꿔주세요.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = 'test.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0] || 0)
const arr = input[1].split(' ').map(Number)

let answer = 0
const visited = Array(N).fill(false)
const perm = Array(N)

function dfs(depth) {
    if (depth === N) {
        let temp = 0
        for (let i = 0; i < N - 1; i++) {
            temp += Math.abs(perm[i] - perm[i + 1])
        }
        if (temp > answer) answer = temp
        return
    }
    for (let i = 0; i < N; i++) {
        if (visited[i]) continue
        visited[i] = true
        perm[depth] = arr[i]
        dfs(depth + 1)
        visited[i] = false
    }
}

dfs(0)
console.log(answer)