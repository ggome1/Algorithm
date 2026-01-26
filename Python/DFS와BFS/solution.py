from collections import deque

def dfs(v):
    global answer, connections, n, visited

    if visited[v]:
        return
    else:
        visited[v] = 1
        answer.append(v)
    
    for i in connections[v]:
        dfs(i)

    return answer

def bfs(v):
    global connections, n, visited
    q = deque(connections[v])
    answer = [v]
    visited[v] = 1
    while q:
        pop_value = q.popleft()
        if not visited[pop_value]:
            visited[pop_value] = 1
            answer.append(pop_value)
            q += connections[pop_value]


    
    return answer



n, m, v = map(int, input().split())
connections = [[] for _ in range(n + 1)]


for i in range(m):
    x, y = map(int, input().split())
    connections[x].append(y)
    connections[y].append(x)

for i in connections:
    i.sort()

visited = [0] * (n + 1)
answer = []
dfs(v)
print(*answer)

visited = [0] * (n + 1)
print(*bfs(v))