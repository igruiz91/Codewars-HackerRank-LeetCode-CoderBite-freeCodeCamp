def group(arr):
  resp  = []
  for i in range(len(arr)):
    if i == arr.index(arr[i]):
      resp.append([arr[i]]* arr.count(arr[i]))
  return resp


def group_up(arr):
  return [[n]*arr.count(n) for i, n in enumerate(arr) if arr.index(n)==i]

print(group([3,3, 2, 6, 2, 1, 3]))
print(group_up([3, 3, 2, 6, 2, 1, 3]))

