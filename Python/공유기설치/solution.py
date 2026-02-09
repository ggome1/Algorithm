n, c = map(int, input().split())

arr = [int(input()) for i in range(n)]
arr.sort()

left = 1
right = arr[n - 1] - arr[0]
ans = 0

while left <= right:
    mid = (left + right) // 2
    cur = arr[0]
    count = 1

    for i in range(1, n):
        if arr[i] - cur >= mid:
            count += 1
            cur = arr[i]
    
    if count >= c:
        ans = mid
        left = mid + 1
    else:
        right = mid - 1

print(ans)