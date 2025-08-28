const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n')

const [n, m] = input[0].split(' ').map(Number)
const board = [];
const visit = Array.from({length: n}, () => Array(m).fill(false))
let x, y;

for (let i = 1; i <= n; i++) {
    const temp = input[i].split(' ').map(Number)
    const target = temp.indexOf(2)
    if (target !== -1) {
        x = i - 1;
        y = target
    }
    board.push(temp)
}

board[x][y] = 0
visit[x][y] = true;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const queue = [[x, y, 1]];

while (queue.length) {
    let [x, y, cnt] = queue.pop();
    for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]

        if (0 <= nx && nx < n && 0 <= ny && ny < m && board[nx][ny] === 1 && !visit[nx][ny]) {
            board[nx][ny] = cnt
            visit[nx][ny] = true
            queue.unshift([nx, ny, cnt + 1])
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!visit[i][j] && board[i][j]) {
            board[i][j] = -1
        }
    }
}
console.log(board.map(e => e.join(' ')).join('\n'))