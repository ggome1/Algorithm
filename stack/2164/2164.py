import sys
input = lambda: sys.stdin.readline().strip()
from collections import deque

def main():
    q = deque(range(1, int(input()) + 1))
    while (len(q) != 1):
        q.popleft()
        q.append(q.popleft())
    print(q.pop())
main()
6