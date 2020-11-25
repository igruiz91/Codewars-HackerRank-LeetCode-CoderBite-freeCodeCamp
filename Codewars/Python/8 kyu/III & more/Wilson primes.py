def factorial(x):
  resp = 1
  while x>0:
    resp*=x
    x-=1
  return resp

def am_i_wilson(n):
  resp = (factorial(n-1)+1) / (n*n)
  return resp.is_integer()


print(am_i_wilson(5))
print(am_i_wilson(8))
print(am_i_wilson(11))
print(am_i_wilson(13))
