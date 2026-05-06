def solution(board, h, w):
    answer = 0
    
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    
    for i in range(0, 4):
        nh = h + dy[i]
        nw = w + dx[i]
        
        if (0 <= nh < len(board) and 0 <= nw < len(board[0]) and board[h][w] == board[nh][nw]):
            answer += 1
    
    return answer