def to_base_n(num, n):
  if num == 0:
    return '0'

  # 10~15를 나타낼 문자열 정의 (16진법까지 커버 가능)
  digits = '0123456789ABCDEF'
  res = []

  while num > 0:
    num, mod = divmod(num, n)
    res.append(digits[mod])

  # 나머지를 거꾸로 뒤집어야 올바른 진법 숫자가 됨
  return ''.join(reversed(res))


def solution(n, t, m, p):
  total_string = ''
  num = 0

  # 튜브가 말해야 하는 총 개수(t)를 채우려면, 전체 게임에서 적어도 t * m 개의 글자가 필요합니다.
  while len(total_string) < t * m:
    total_string += to_base_n(num, n)
    num += 1

  # 튜브의 순서(p)에 해당하는 글자들만 간격(m)에 맞춰 추출
  # p는 1부터 시작하므로 인덱스는 p-1부터 시작
  answer = total_string[p - 1 : t * m : m]

  return answer