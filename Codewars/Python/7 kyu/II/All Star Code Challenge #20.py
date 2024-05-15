def add_arrays(array1, array2):
  if len(array1) != len(array2): raise "Arrays must have equal length"
  resp = []
  for i in range(len(array1)):
    resp.append(array1[i] + array2[i])
  return resp



def add_arrays_up(arr1, arr2):
  if len(arr1) != len(arr2): raise "Arrays should have equal length"
  return [x + y for x, y in zip(arr1, arr2)]


print(add_arrays([1, 2], [4, 5]))
print(add_arrays(["a"], ["b"]))
print(add_arrays([1,3, 2], [4, 5]))

print(add_arrays_up([1, 2], [4, 5]))
print(add_arrays_up(["a"], ["b"]))
print(add_arrays_up([1,3, 2], [4, 5]))

