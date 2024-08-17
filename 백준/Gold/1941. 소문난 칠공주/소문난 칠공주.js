const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const grid = input.map(line => line.split(''));
const selected = Array(25).fill(false);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = 0;

function isConnected(count, indexes) {
    const visited = Array(7).fill(false);
    let queue = [indexes[0]];
    visited[0] = true;
    let connectedCount = 1;

    while (queue.length) {
        const curr = queue.shift();
        const [x, y] = [Math.floor(curr / 5), curr % 5];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            const nextIndex = nx * 5 + ny;

            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                const index = indexes.indexOf(nextIndex);
                if (index !== -1 && !visited[index]) {
                    visited[index] = true;
                    queue.push(nextIndex);
                    connectedCount++;
                }
            }
        }
    }

    return connectedCount === 7;
}

function dfs(depth, start, yCount, indexes) {
    if (yCount > 3) return;
    if (depth === 7) {
        if (isConnected(7, indexes)) {
            answer++;
        }
        return;
    }

    for (let i = start; i < 25; i++) {
        const x = Math.floor(i / 5);
        const y = i % 5;
        selected[i] = true;
        indexes.push(i);

        dfs(depth + 1, i + 1, yCount + (grid[x][y] === 'Y' ? 1 : 0), indexes);

        selected[i] = false;
        indexes.pop();
    }
}

dfs(0, 0, 0, []);
console.log(answer);
