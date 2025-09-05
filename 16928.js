const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\r\n');
const [N, M] = input[0].split(' ').map(Number);

const move = {};
for (let i = 1; i <= N + M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    move[a] = b;
}

const queue = [[1, 0]]; // [현재 위치, 주사위 횟수]
const visited = Array(101).fill(false);
visited[1] = true;

while (queue.length) {
    const [pos, cnt] = queue.shift();

    if (pos === 100) {
        console.log(cnt);
        break;
    }

    for (let dice = 1; dice <= 6; dice++) {
        let next = pos + dice;
        if (next > 100) continue;

        // 사다리 또는 뱀 있으면 순간이동
        if (move[next]) next = move[next];

        if (!visited[next]) {
            visited[next] = true;
            queue.push([next, cnt + 1]);
        }
    }
}
