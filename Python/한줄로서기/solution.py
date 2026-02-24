n = int(input())

key = map(int, input().split())

ans = [0] * (n + 1)

for idx, i in enumerate(key):
    