k, n = map(int, input().split())

arr = [int(input()) for i in range(k)]

arr.sort()

left = 1
right = arr[k - 1]
ans = 0

while left <= right:
    mid = (left + right) // 2
    total = 0
    for i in arr:
        total += i // mid
    
    if total >= n:
        if mid > ans:
            ans = mid
        left = mid + 1
    else:
        right = mid - 1


print(ans)