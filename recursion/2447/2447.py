import sys
input = lambda: sys.stdin.readline().strip()
def main():
    def dfs(N):
        if (N == 1):
            return ['*']
        
        arr = dfs(N // 3)
        ans = []
        
        for star in arr:
            ans.append(star * 3)
        for star in arr:
            ans.append(star + ' ' * (N // 3) + star)
        for star in arr:
            ans.append(star * 3)
        
        return ans

    print("\n".join(dfs(int(input()))))
    
main()
