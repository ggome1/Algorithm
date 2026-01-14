from collections import deque

def solution():
    n = int(input())
    str = input().split()
    temp = deque(str)
    answer = deque([])

    answer.append(temp.popleft())
    while temp:
        new = temp.popleft()
        if new > answer[0]:
            answer.append(new)
        else:
            answer.appendleft(new)
    return ''.join(answer)

t = int(input())
printArr = []
for i in range(t):
    printArr.append(solution())

for i in printArr:
    print(i)

