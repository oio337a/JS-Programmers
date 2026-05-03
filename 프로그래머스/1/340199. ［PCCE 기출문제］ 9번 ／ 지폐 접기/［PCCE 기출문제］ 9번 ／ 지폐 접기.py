def solution(wallet, bill):
    answer = 0
    
    while 1:
        if max(wallet) >= max(bill) and min(wallet) >= min(bill):
            break
        bill = [max(bill) // 2, min(bill)]
        answer += 1
    return answer