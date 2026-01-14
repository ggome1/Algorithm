n = int(input())
arr = []

for _ in range(n):
    arr.append(input().rsplit(".", 1)[-1])

answer = {}

for i in arr:
    if i in answer:
        answer[i] += 1
    else:
        answer[i] = 1

for k, v in sorted(answer.items()):
    print(k, v)