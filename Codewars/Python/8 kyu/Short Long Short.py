def solution(a, b):
    return a+b+a if len(a)<len(b) else b+a+b


print(solution('45', '1'))
