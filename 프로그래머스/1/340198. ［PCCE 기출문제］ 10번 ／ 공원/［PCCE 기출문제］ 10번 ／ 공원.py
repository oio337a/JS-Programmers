# def solution(mats, park):
#     mats = sorted(mats, reverse=True)
    
#     for mat in mats:
#         for i in range(0, len(park) - mat + 1):
#             for j in range(0, len(park[0]) - mat - 1):
#                 if park[i][j] == "-1":
#                     flag = True
#                     for k in range(i, i + mat):
#                         for q in range(j, j + mat):
#                             if park[k][q] != "-1":
#                                 flag = False
#                                 break
#                     if flag:
#                         return mat
#     return -1

def solution(mats, park):
    mats = sorted(mats, reverse=True)  # 큰 돗자리부터 확인
    
    rows, cols = len(park), len(park[0])
    
    for mat in mats:
        for i in range(rows - mat + 1):
            for j in range(cols - mat + 1):
                flag = True
                for k in range(i, i + mat):
                    for q in range(j, j + mat):
                        if park[k][q] != "-1":  # 문자열 비교
                            flag = False
                            break
                    if not flag:
                        break
                if flag:
                    return mat
    return -1