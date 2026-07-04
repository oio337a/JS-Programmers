def solution(sequence, k):
    s, e = 0, 0
    temp = sequence[0]
    
    # 가장 짧은 길이를 찾기 위해 초기값을 무한대(혹은 배열 최대 길이 초과)로 설정합니다.
    best_s, best_e = 0, len(sequence)
    
    while e < len(sequence):
        if temp == k:
            # 현재 찾은 수열의 길이가 기존에 찾은 최고 기록보다 짧다면 갱신
            if (e - s) < (best_e - best_s):
                best_s, best_e = s, e
            
            # 다른 짧은 수열이 있는지 탐색을 계속하기 위해 s를 이동
            temp -= sequence[s]
            s += 1
            
        elif temp > k:
            # 합이 너무 크면 s를 이동시켜 구간을 줄임
            temp -= sequence[s]
            s += 1
            
        else: # temp < k
            # 합이 부족하면 e를 이동시켜 구간을 늘림
            e += 1
            if e < len(sequence): # 인덱스 에러 방지
                temp += sequence[e]
                
    return [best_s, best_e]