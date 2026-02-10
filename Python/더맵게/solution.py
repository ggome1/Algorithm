import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while len(scoville) > 1:
        fst = heapq.heappop(scoville)
        if fst >= K:
            return answer
        snd = heapq.heappop(scoville)
        
        answer += 1
        heapq.heappush(scoville, fst + snd * 2)
    
    if scoville[0] < K:
        return -1
    
    return answer