from collections import deque

def solution(num):
    a, b = 0, 1
    while(1):
        a, b = b, a + b
        if b == num:
            return b
        elif b > num:
            return a
    return 
t = int(input())
printArr = []
for i in range(t):
    num = int(input())
    answer = deque([])
    while num:
        cur = solution(num)
        answer.appendleft(str(cur))
        num -= cur
    printArr.append(' '.join(answer))

for i in printArr:
    print(i)