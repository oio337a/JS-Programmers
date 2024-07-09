function solution(board) {
    const N = board.length
    const dx = [0, 0, 1, 1, 1, -1, -1, -1]
    const dy = [1, -1, 0, -1, 1, 0, 1, -1]
    
    let que = []
    board.forEach((e, i) => e.forEach((e, j) => {
        if (e === 1) que.push([i, j])
    }))
    que.forEach(([x, y]) => {
        for (let i = 0; i < 8; i++) {
            [nx, ny] = [x + dx[i], y + dy[i]]
            if (0 <= nx && nx < N & 0 <= ny && ny < N) board[nx][ny] = 1;
        }
    })
    return N ** 2 - board.reduce((a, c) => a + c.reduce((acc, cur) => acc + cur, 0), 0)
}