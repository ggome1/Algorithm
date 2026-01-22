[n, s] = list(map(int, input().split()))

arr = list(map(int, input().split()))

answer = 0

def dfs(sum, i):
    global answer

    if i == n:
        if sum == s:
            answer += 1
        return

    dfs(sum + arr[i], i + 1)
    dfs(sum, i + 1)

dfs(0, 0)

if s == 0:
    answer -= 1
print(answer)