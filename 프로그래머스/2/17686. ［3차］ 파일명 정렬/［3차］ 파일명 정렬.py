import re


def solution(files):
  # 정규표현식을 이용해 숫자를 기준으로 첫 번째 그룹만 쪼갭니다.
  # re.split(r'([0-9]+)', file, maxsplit=1) -> [HEAD, NUMBER, TAIL] 형태의 리스트 반환
  return sorted(files,key=lambda x: (re.split(r'([0-9]+)', x, maxsplit=1)[0].lower(), int(re.split(r'([0-9]+)', x, maxsplit=1)[1]),),)
