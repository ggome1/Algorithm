def solution(answers):
    answer = []
    fst = [1, 2, 3, 4, 5]
    snd = [2, 1, 2, 3, 2, 4, 2, 5]
    trd = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count = [0] * 3
    
    for idx, i in enumerate(answers):
        if fst[idx % 5] == i:
            count[0] += 1
        if snd[idx % 8] == i:
            count[1] += 1
        if trd[idx % 10] == i:
            count[2] += 1
    
    max_value = max(count)
    for idx, i in enumerate(count):
        if max_value == i:
            answer.append(idx + 1)
        
        
    return answer