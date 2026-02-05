n, k = map(int, input().split())

arr = []
for _ in range(n):
    w, v = map(int, input().split())
    arr.append((w, v))

dp = [0] * (k + 1)

for w, v in arr:
    for wei in range (k, w - 1, -1):
        dp[wei] = max(dp[wei], dp[wei - w] + v)

print(dp[k])
