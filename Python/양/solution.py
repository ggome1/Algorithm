from collections import deque

[r, c] = list(map(int, input().split()))

garden = []
total_s = 0
total_w = 0

for _ in range(r):
    garden.append(list(input().strip()))

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

visited = [[0] * c for _ in range(r)]

def bfs(newy, newx):
    global r, c

    sheep = 0
    wolf = 0

    visited[newy][newx] = 1
    q = deque([(newy, newx)])

    
    while q:
        y, x = q.popleft()
        if garden[y][x] == 'v':
            wolf += 1

        if garden[y][x] == 'o':
            sheep += 1

        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]

            if 0 <= ny < r and 0 <= nx < c:
                if garden[ny][nx] != '#' and visited[ny][nx] == 0:     
                    visited[ny][nx] = 1
                    q.append((ny, nx))
    
    return (sheep, wolf)


for i in range(r):
    for j in range(c):
        if garden[i][j] != '#' and visited[i][j] == 0:
            s, w = bfs(i, j)

            if s > w:
                total_s += s
            else:
                total_w += w

print(total_s, total_w)