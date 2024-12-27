import sys
input = lambda: sys.stdin.readline().strip()
from collections import deque

def main():
    ans = []
    length = int(input())
    q = deque(enumerate(map(int, input().split())))
    
    while q:
        index, num = q.popleft()
        ans.append(index + 1)
        
        if (num > 0):
            q.rotate(-(num - 1))
        if (num < 0):
            q.rotate(-num)
    
    print(" ".join(map(str, ans)))
main()
