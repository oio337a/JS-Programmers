import sys
import heapq
input = sys.stdin.readline

N, K = map(int, input().split())
jewelery = [list(map(int, input().split())) for _ in range(N)]
bag = [int(input()) for _ in range(K)]
jewelery.sort()
bag.sort()

result = 0
temp = []

for weight in bag:
    while jewelery and weight >= jewelery[0][0]:
        heapq.heappush(temp, -jewelery[0][1])  # max heap
        heapq.heappop(jewelery)

    if temp:
        result += heapq.heappop(temp)

    elif not jewelery:
        break
print(-result)
