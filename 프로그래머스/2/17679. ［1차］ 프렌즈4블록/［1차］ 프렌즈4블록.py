def solution(m, n, board):
  board = [list(row) for row in board]
  answer = 0

  while True:
    # 1. 2x2로 겹치는 블록들의 좌표 찾기
    temp = set()  # 중복 좌표 제거를 위해 집합(set) 사용 추천
    for i in range(m - 1):
      for j in range(n - 1):
        if (
            board[i][j] != 0
            and board[i][j]
            == board[i][j + 1]
            == board[i + 1][j]
            == board[i + 1][j + 1]
        ):
          temp.add((i, j))
          temp.add((i, j + 1))
          temp.add((i + 1, j))
          temp.add((i + 1, j + 1))

    # 더 이상 지울 블록이 없다면 반복문 탈출
    if not temp:
      break

    # 2. 지워진 블록 개수 누적
    answer += len(temp)

    # 3. 찾은 위치의 블록들을 0으로 지우기
    for y, x in temp:
      board[y][x] = 0

    # 4. 블록 아래로 내리기 (중력 적용)
    for j in range(n):
      col_items = [board[i][j] for i in range(m) if board[i][j] != 0]
      # print(col_items)
      new_col = [0] * (m - len(col_items)) + col_items
      for i in range(m):
        board[i][j] = new_col[i]

  return answer