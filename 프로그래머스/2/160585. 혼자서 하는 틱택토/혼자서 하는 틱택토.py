def solution(board):
    # 1. O와 X의 개수 세기
    o_count = sum(row.count('O') for row in board)
    x_count = sum(row.count('X') for row in board)
    
    # [조건 1] O와 X의 개수 차이가 비정상적인 경우 (순서 위반)
    if not (o_count == x_count or o_count == x_count + 1):
        return 0
        
    # 빙고 여부를 확인하는 내부 함수
    def has_won(player):
        # 가로, 세로 확인
        for i in range(3):
            if board[i][0] == board[i][1] == board[i][2] == player: return True
            if board[0][i] == board[1][i] == board[2][i] == player: return True
        # 대각선 확인
        if board[0][0] == board[1][1] == board[2][2] == player: return True
        if board[0][2] == board[1][1] == board[2][0] == player: return True
        return False
        
    o_win = has_won('O')
    x_win = has_won('X')
    
    # [조건 2] O가 이겼는데 X가 한 번 더 둔 경우 (게임 종료 위반)
    # O가 이겼다면 무조건 O가 선공이므로 개수가 1개 더 많아야 합니다.
    if o_win and o_count != x_count + 1:
        return 0
        
    # [조건 3] X가 이겼는데 O가 한 번 더 둔 경우 (게임 종료 위반)
    # X가 이겼다면 후공이 이기고 바로 끝난 것이므로 개수가 같아야 합니다.
    if x_win and o_count != x_count:
        return 0
        
    # 위 모든 검문을 무사히 통과했다면 정상적인 게임!
    return 1