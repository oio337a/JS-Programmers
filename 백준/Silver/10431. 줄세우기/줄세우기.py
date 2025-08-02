p = int(input())  
arr = [list(map(int, input().split())) for _ in range(p)]  
height = [[] for _ in range(p)]     #키 순으로 정렬될 리스트
result = [[] for _ in range(p)]     #출력될 리스트 (테스트 케이스 번호 + 걸음 수)
cnt = 0  #걸음수

for i in range(p):
    cnt=0   #테스트 케이스마다 걸음 수 초기화
    height[i].append(arr[i][0])
    height[i].append(arr[i][1])
    for j in range(2, 21):  
        for k in range(1, len(height[i])):  
            # 현재 넣으려는 학생을(arr) 정렬되어 있는 학생들(height)과 한명씩 비교하기
            if (arr[i][j] < height[i][k]): 
                height[i].insert(k, arr[i][j]) 
                # height 전체 길이에서 현재 인덱스, 테스트 케이스를 빼주면 학생들이 움직인 걸음 수
                cnt += len(height[i]) - 1 - k
                break
            if k == len(height[i]) - 1: 
                height[i].append(arr[i][j]) 
    result[i].append(arr[i][0]) 
    result[i].append(cnt)   

for i in range(p):
    print(result[i][0], result[i][1])