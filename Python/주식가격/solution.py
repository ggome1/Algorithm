from collections import deque

def solution(prices):
    answer = [0] * len(prices)
    stack = []
    
    for i, price in enumerate(prices):
        while stack and prices[stack[-1]] > price:
            answer[stack[-1]] = i - stack[-1]
            stack.pop()
        stack.append(i)
    
    for i in stack:
        answer[i] = len(prices) - 1 - i
    return answer