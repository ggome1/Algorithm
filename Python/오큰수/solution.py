import sys
input = sys.stdin.readline
n = int(input())

a = list(map(int, input().split()))

s = []

answer = [-1] * n

for i in range(n):
    while s and a[s[-1]] < a[i]:
        answer[s[-1]] = a[i]
        s.pop()
    s.append(i)

print(*answer)

