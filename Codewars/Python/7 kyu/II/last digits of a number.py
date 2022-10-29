def solution(n, d):
  numStr = list(map(int, str(n)))
  return numStr[-d:] if d>0 else []

def solution_up(n,d):
  return [int(x) for x in str(n)[-d:]] if d>0 else []

print(solution(123767, 4))
print(solution_up(123767, 4))
print(solution(1343, 5))
