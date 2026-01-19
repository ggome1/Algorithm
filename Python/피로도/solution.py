def solution(k, dungeons):
    answer = -1
    n = len(dungeons)
    visited = [0] * n
    def dfs(k, explo):
        nonlocal answer
        
        for idx, i in enumerate(dungeons):
            if visited[idx] == 1 or i[0] > k:
                answer = explo if explo > answer else answer
                continue
            
            visited[idx] = 1
            dfs(k - i[1], explo + 1)
            visited[idx] = 0
            
            
    dfs(k, 0)
    return answer