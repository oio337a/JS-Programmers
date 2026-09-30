from collections import Counter


def solution(str1, str2):
  # 1. 두 글자씩 끊어서 유효한 다중집합을 만드는 내부 함수
  def get_multiset(s):
    res = []
    for i in range(len(s) - 1):
      pair = s[i : i + 2].lower()  # 대소문자 무시를 위해 소문자로 변환
      if pair.isalpha():  # 영문자로 된 글자 쌍만 허용 (특수문자/숫자 포함 시 버림)
        res.append(pair)
    return res

  arr1 = get_multiset(str1)
  arr2 = get_multiset(str2)

  counter1 = Counter(arr1)
  counter2 = Counter(arr2)

  # 2. 다중집합의 교집합과 합집합 크기 계산
  # Counter의 & 연산은 min(개수), | 연산은 max(개수)를 자동으로 처리해 줍니다.
  intersection = sum((counter1 & counter2).values())
  union = sum((counter1 | counter2).values())

  # 3. 예외 처리: 둘 다 공집합인 경우 자카드 유사도는 1로 정의
  if union == 0:
    return 65536

  # 4. 자카드 유사도 계산 후 65536을 곱한 정수부 반환
  return int((intersection / union) * 65536)