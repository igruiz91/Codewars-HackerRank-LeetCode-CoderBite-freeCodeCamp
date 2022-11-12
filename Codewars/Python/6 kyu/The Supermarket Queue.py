import bisect

def queue_time(customers, n):
  stack = [0]*n
  for c in customers:
    idx = stack.index(min(stack))
    stack[idx]+=c
  return  max(stack)


print(queue_time([2, 2, 3, 3, 4, 4], 2))
print(queue_time([1, 2, 3, 4, 5], 1))
print(queue_time([ 2, 3, 10], 2))
print(queue_time([1, 2, 3, 4, 5], 100))

