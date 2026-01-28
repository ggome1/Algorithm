from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    x = [-1, 0, 1, 0]
    y = [0, -1, 0, 1]
    
    visited = [[0] * m for _ in range(n)]
    visited[0][0] = 1
    
    q = deque([(0, 0, 1)])
    
    while q:
        cur_x, cur_y, move = q.popleft()
        
        if cur_x == m - 1 and cur_y == n - 1:
            return move
        
        for i in range(4):
            wx = cur_x + x[i]
            wy = cur_y + y[i]
            if wx < 0 or wx >= m or wy < 0 or wy >= n:
                continue
            if visited[wy][wx] == 1 or maps[wy][wx] == 0:
                continue
            q.append((wx, wy, move + 1))
            visited[wy][wx] = 1
            
    return -1