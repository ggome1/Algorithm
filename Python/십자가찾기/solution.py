[n, m] = list(map(int, input().split()))

arr = [list(input()) for _ in range(n)]
arr2 = [row[:] for row in arr]

answer = []

for i in range(n):
    for j in range(m):
        if arr[i][j] == '*':
            cnt = 1
            while i >= cnt and j >= cnt and i < n - cnt and j < m - cnt:
                if arr[i][j - cnt] == '*' and arr[i][j + cnt] == '*' and arr[i - cnt][j] == '*' and arr[i + cnt][j] == '*':
                    arr2[i][j - cnt] = '.'
                    arr2[i][j + cnt] = '.'
                    arr2[i - cnt][j] = '.'
                    arr2[i + cnt][j] = '.'
                    arr2[i][j] = '.'
                    answer.append([i + 1, j + 1, cnt])
                    cnt += 1
                else:
                    break;

valid = True
for i in range(n):
    for j in range(m):
        if arr2[i][j] == '*':
            valid = False

if not valid:
    print(-1)
else:
    print(len(answer))
    for x, y, cnt in answer:
        print(x, y, cnt)