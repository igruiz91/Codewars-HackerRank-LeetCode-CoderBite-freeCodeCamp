import math

def max_sum(arr,ranges):
  resp = -math.inf
  for i,j in ranges:
    s=0
    for n in range(i,j+1):
      s+=arr[n]
    if s>resp: resp=s
  return resp

def max_sum_up(arr, ranges):
  return max(sum(arr[start: stop+1]) for start, stop in ranges)


print(max_sum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]))
print(max_sum_up([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]))
print(max_sum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]))
print(max_sum_up([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]))
