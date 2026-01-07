import sys
input = lambda: sys.stdin.readline().strip()
def main():
    def check(index):
        for i in range(index):
            if (row_visited[index] == row_visited[i] or abs(index - i) == abs(row_visited[index] - row_visited[i])):
                return False
        return True
        
    def dfs(index):
        nonlocal count
        if index == N:
            count += 1
            return
        for i in range(N):
            row_visited[index] = i
            if check(index):
                dfs(index + 1)
            
    N = int(input())
    count = 0
    row_visited = [0] * N
    dfs(0)
    print(count)
main()
