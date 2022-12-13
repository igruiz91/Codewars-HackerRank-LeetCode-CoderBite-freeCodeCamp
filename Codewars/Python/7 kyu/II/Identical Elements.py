def duplicate_elements(m, n):
  for i in range(len(m)):
    if m[i] in n: return True
  return False


def duplicate_elements_up(m, n):
  return bool(set(m) & set(n))


def duplicate_elements_up_two(m, n):
  return any(x in n for x in m)

print(duplicate_elements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]))
print(duplicate_elements_up([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]))
