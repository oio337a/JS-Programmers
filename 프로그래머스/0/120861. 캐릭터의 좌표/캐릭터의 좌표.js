function solution(keyinput, board) {
    const d = [[0, 1], [0, -1], [-1, 0], [1, 0]] // u, d, l, r
    const d_num = { 'up': 0, 'down': 1, 'left': 2, 'right': 3 }
    
    const [len_x, len_y] = board
    const [min_x, min_y, max_x, max_y] = [-((len_x - 1) / 2), -((len_y - 1) / 2), (len_x - 1) / 2, (len_y - 1) / 2]
    
    let [x, y] = [0, 0]
    
    keyinput.forEach(e=> {
     [nx, ny] = d[d_num[e]]
        if (min_x <= x + nx && min_y <= y + ny && max_x >= x + nx && max_y >= y + ny) {
            x += nx
            y += ny
        }
    })
    return [x, y]
}