import sys
input = lambda: sys.stdin.readline().strip()
def main():
    N, M = map(int,input().split(" "))
    def dfs():
        if (len(res) == M):
            print(' '.join(map(str, res)))
            return
        for i in range(1, N + 1):
            if (visited[i]):
                continue
            visited[i] = True
            res.append(i)
            dfs()
            res.pop()
            visited[i] = False
    
    res = []
    visited = [False] * (N + 1)
    dfs()
main()
