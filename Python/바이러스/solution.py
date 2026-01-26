from collections import deque

def solution():
    answer = 0
    
    n = int(input())
    k = int(input())

    virus = [0] * (n + 1)

    connections = [[] for _ in range(n + 1)]
    for i in range(k):
        x, y = map(int, input().split())
        connections[x].append(y)
        connections[y].append(x)
    def dfs(n):
        nonlocal answer, virus, connections

        if virus[n]:
            return
        else:
            answer += 1
            virus[n] = 1

        for i in connections[n]:
            dfs(i)

    dfs(1)

    q = deque([])
    virus = [0] * (n + 1)
    virus[1] = 1
    answer = 0

    def bfs(n):
        nonlocal answer, virus, connections

        for i in connections[n]:
            if virus[i]:
                continue
            else:
                answer += 1
                virus[i] = 1
                q.append(i)
        while q:
            bfs(q.popleft())

    bfs(1)

    print(answer)

solution()