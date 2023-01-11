def solution(items, index, default_value):
  return items[index] if abs(index)<len(items) else default_value

def solution_up(items, i, default):
  try: return items[i]
  except IndexError: return default


rng = list(range(1, 4))


print(solution(rng, 1, 'a'))
print(solution_up(rng, 1, 'a'))
print(solution(rng, 15, 'a'))
print(solution_up(rng, 15, 'a'))
