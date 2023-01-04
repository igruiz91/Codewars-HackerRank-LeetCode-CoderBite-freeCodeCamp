def is_all_possibilities(arr):
  count = 0
  if len(arr) == 0: return False
  for n in sorted(arr):
    if n != count: return False
    count+=1
  return True



def is_all_possibilities_up(arr):
  return bool(arr) and set(arr) == set(range(len(arr)))

print(is_all_possibilities([3, 2, 1, 0]))
print(is_all_possibilities_up([3, 2, 1, 0]))
print(is_all_possibilities([0, 2, 19, 4, 4]))
print(is_all_possibilities_up([0, 2, 19, 4, 4]))
