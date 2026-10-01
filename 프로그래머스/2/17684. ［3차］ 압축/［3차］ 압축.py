def solution(msg):
  # 1. 길이가 1인 모든 단어(A~Z)를 포함하도록 사전 초기화
  dictionary = {chr(i + 64): i for i in range(1, 27)}
  next_index = 27
  answer = []

  i = 0
  while i < len(msg):
    # 2. 현재 위치에서 시작하여 사전에 존재하는 가장 긴 문자열 w 찾기
    w = msg[i]
    j = i + 1
    while j <= len(msg) and msg[i:j] in dictionary:
      w = msg[i:j]
      j += 1

    # 3. w에 해당하는 사전의 색인 번호를 결과에 추가
    answer.append(dictionary[w])

    # 4. 입력에서 처리되지 않은 다음 글자(c)가 있다면 w+c를 사전에 등록
    if j <= len(msg):
      dictionary[msg[i:j]] = next_index
      next_index += 1

    # 5. w의 길이만큼 인덱스 이동
    i += len(w)

  return answer