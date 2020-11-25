def next_id_n(arr):
  l = len(arr)
  return abs(sum(arr)-(l*(l+1)/2))


def next_id(arr):
  for i in range(0,len(arr)):
    if i not in arr:
      return i
  return len(arr)

print(next_id([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(next_id([5, 4, 3, 2, 1]))
print(next_id([0, 1, 2, 3, 5]))
