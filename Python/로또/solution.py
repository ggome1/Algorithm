s = []

while True:
    arr = list(map(int, input().split()))
    if not arr[0]:
        break
    s.append(arr[1:])

def dfs(i, arr, count):
    if len(arr) == 6:
        print(' '.join(map(str, arr)))
        return
    for j in range(count, len(i)):
        dfs(i, arr + [i[j]], j + 1)



for i in s:
    if not i == s[0]:
        print()
    arr = []
    dfs(i, arr, 0)
