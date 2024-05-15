def nth_fib_up(n):
  a,b = (0,1)
  for i in range(n-1):
    a,b = b, a +b
  return a



def nth_fib(n):
  if n == 1:
    return 0
  if n == 2:
    return 1
  else:
    return nth_fib(n-1)+nth_fib(n-2)



print(nth_fib_up(4))
print(nth_fib(4))
