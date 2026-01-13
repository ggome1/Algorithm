def solution(arr):
    answer = 0
    stack = []
    flag = 0

    for i in arr:
        if i == '(':
            stack.append(i)
            flag = 0
        else:
            stack.pop()
            if flag:
                answer += 1
            else:
                answer += len(stack)
            flag = 1
            
    print(answer)

solution(input())