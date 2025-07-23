str = input()

str = str.upper()
only_str = list(set(str))

cnt_list = []
for i in only_str:
    cnt = str.count(i)
    cnt_list.append(cnt)

if cnt_list.count(max(cnt_list)) > 1:
    print("?")
else:
    max_index = cnt_list.index(max(cnt_list))
    print(only_str[max_index])
