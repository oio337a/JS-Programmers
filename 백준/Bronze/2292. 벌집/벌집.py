# 벌집

'''
1 + 0 = 1
1 + 6 = 2
7 + 12 = 3
19 + 18 = 4
'''

n = int(input())

cnt = 1
level = 1

while n > cnt:
	cnt += 6 * level
	level += 1
print(level)