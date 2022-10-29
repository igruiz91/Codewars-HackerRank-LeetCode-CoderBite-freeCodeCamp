def dominator(arr):
  for x in arr:
    if arr.count(x) > len(arr)/2: return x
  return -1


print(dominator([3, 4, 3, 2, 3, 1, 3, 3]))
print(dominator([1, 2, 3, 4, 5]))
