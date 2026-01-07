def solution(clothes):
    answer = 1
    d = {}
    
    for [x, y] in clothes:
        if y in d:
            d[y] += 1
        else:
            d[y] = 1
    
    for i in d.values():
        answer *= i + 1
    
    
    
    return answer - 1