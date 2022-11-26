def solution(stones):
  count , current = 0, stones[0]
  for i in range(1, len(stones)):
    if stones[i] == current: count += 1
    else: current = stones[i]
  return count



def solution_up(stones):
  return sum(1 for i in range(1, len(stones)) if i and stones[i] == stones[i-1])


def solution_up_two(stones):
  return sum(a==b for a, b in zip(stones,stones[1:]))

print(solution("RGBRGBRGGB"))
print(solution("RGGRGBBRGRR"))
print(solution("RRRRGGGGBBBB"))
print("------------------------------------------------")
print(solution_up("RGBRGBRGGB"))
print(solution_up("RGGRGBBRGRR"))
print(solution_up("RRRRGGGGBBBB"))
print("------------------------------------------------")
print(solution_up_two("RGBRGBRGGB"))
print(solution_up_two("RGGRGBBRGRR"))
print(solution_up_two("RRRRGGGGBBBB"))
