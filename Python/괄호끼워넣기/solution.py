def solution(arr):
    answer = 0
    left = 0
    for i in arr:
        if i == '(':
            left += 1
        elif left:
            left -= 1
        else:
            answer += 1
    answer += left
    
    print(answer)


solution(input())