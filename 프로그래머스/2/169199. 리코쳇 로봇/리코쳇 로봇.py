from collections import deque

def solution(board):
    y_len = len(board)
    x_len = len(board[0])

    # 1. 시작점('R') 위치 찾기
    start_y, start_x = 0, 0
    for i in range(y_len):
        for j in range(x_len):
            if board[i][j] == 'R':
                start_y, start_x = i, j

    # 상하좌우 방향
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]

    # 2. 큐와 방문 처리 세트 초기화
    # 큐에는 (y좌표, x좌표, 이동 횟수)만 담습니다.
    que = deque([(start_y, start_x, 0)])
    visited = set([(start_y, start_x)]) # 무한 루프를 막기 위한 방문 기록

    # 3. BFS 탐색 시작
    while que:
        y, x, cnt = que.popleft()

        # 목표 지점('G')에 도착했다면 현재까지의 이동 횟수 반환
        if board[y][x] == 'G':
            return cnt

        # 4가지 방향으로 미끄러지기 시도
        for i in range(4):
            ny, nx = y, x

            # 🚨 핵심 로직: 보드 범위 안이고, 다음 칸이 장애물('D')이 아닐 때까지 계속 직진!
            while 0 <= ny + dy[i] < y_len and 0 <= nx + dx[i] < x_len and board[ny + dy[i]][nx + dx[i]] != 'D':
                ny += dy[i]
                nx += dx[i]

            # 미끄러지기가 끝나고 멈춘 최종 위치(ny, nx)가 처음 와보는 곳이라면
            if (ny, nx) not in visited:
                visited.add((ny, nx))          # 방문 도장 쾅!
                que.append((ny, nx, cnt + 1))  # 큐에 넣고 이동 횟수 1 증가

    # 큐가 다 빌 때까지 'G'에 도달하지 못했다면 불가능한 경우
    return -1