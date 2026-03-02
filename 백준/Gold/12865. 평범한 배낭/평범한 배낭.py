
# 1차원 배열을 가지고 풀이
'''
1. 1차원 배열을 사용하면 K부터 1까지 루프를 돈다.
2. 배낭 용량이 K일 때, 들어간 물건들의 최대 가치합이 들어가게된다.
3. 물건을 넣기를 계속 시도하는 방식
'''

n, k = map(int, input().split())
stuffs = [[0, 0]]
dp = [0] * (k + 1)

for _ in range(n):
	w, v = map(int, input().split())
	stuffs.append([w, v])
	
for i in range(1, n + 1):
	for j in range(k, 0, -1):
		if stuffs[i][0] <= j:
			dp[j] = max(dp[j], dp[j - stuffs[i][0]] + stuffs[i][1])

print(dp[k])