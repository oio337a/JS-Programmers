def convert(s):
  # #이 붙은 음들을 소문자 하나로 치환 (길이를 1로 맞추기 위함)
  return (
      s.replace('C#', 'c')
      .replace('D#', 'd')
      .replace('F#', 'f')
      .replace('G#', 'g')
      .replace('A#', 'a')
  )


def solution(m, musicinfos):
  m = convert(m)  # 네오가 기억한 멜로디도 변환
  answer = []

  for info in musicinfos:
    s, e, title, code = info.split(',')

    # 1. 시간 계산 (분 단위)
    time_s = int(s.split(':')[0]) * 60 + int(s.split(':')[1])
    time_e = int(e.split(':')[0]) * 60 + int(e.split(':')[1])
    play_time = time_e - time_s

    code = convert(code)  # 악보도 변환

    # 2. 재생된 시간만큼 악보 늘리기 (사용자님 아이디어 적용!)
    # 재생 시간이 악보 길이보다 길면 반복하고, 짧으면 잘라냄
    # 몫과 나머지를 이용해 필요한 만큼만 곱해주기
    full_code = (code * (play_time // len(code) + 1))[:play_time]

    # 3. 네오가 기억한 멜로디(m)가 full_code에 포함되어 있는지 확인
    if m in full_code:
      answer.append((play_time, title))

  # 조건이 일치하는 음악이 없는 경우
  if not answer:
    return '(None)'

  # 조건이 일치하는 음악이 여러 개일 때: 재생된 시간이 제일 긴 것, 먼저 입력된 것 순서
  # (파이썬의 sort는 기본적으로 안정 정렬(Stable Sort)을 지원하므로 재생 시간 기준으로만 내림차순 정렬하면 됩니다)
  answer.sort(key=lambda x: x[0], reverse=True)

  return answer[0][1]