import heapq
import sys

heap = []
ans = []

input = sys.stdin.readline
write = sys.stdout.write

n = int(input())

for i in range(n):
    x = int(input())

    if x == 0:
        if len(heap):
            ans.append(heapq.heappop(heap))
        else:
            ans.append(0)
    
    else:
        heapq.heappush(heap, x)


for i in ans:
    write(str(i) + '\n')