def fibonacci(n, fib_nums = {0: 0, 1: 1}):
  if n not in fib_nums:
    fib_nums[n] = fibonacci(n-1, fib_nums) + fibonacci(n-2, fib_nums)
  return fib_nums[n]


def fibonacci_up(n):
  x,y = 0,1
  for i in range(n):
    x,y=y,x+y
  return x




print(fibonacci(4))
print(fibonacci_up(4))
