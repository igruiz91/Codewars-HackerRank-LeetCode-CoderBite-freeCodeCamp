def stanton_measure(arr):
  return arr.count(arr.count(1))


print(stanton_measure([1, 4, 3, 2, 1, 2, 3, 2]))
print(stanton_measure([1, 4, 1, 2, 11, 2, 3, 1]))
