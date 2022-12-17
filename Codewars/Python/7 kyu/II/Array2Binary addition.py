def arr2bin(arr):
  sum = 0
  for n in arr:
    if type(n) == int: sum += n
    else: return False
  return bin(sum)[2:]



print(arr2bin([1, 2]))
print(arr2bin([1, 2, 'a']))
