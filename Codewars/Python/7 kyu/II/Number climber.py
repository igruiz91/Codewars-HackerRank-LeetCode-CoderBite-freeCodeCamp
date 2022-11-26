import math


def climb(n):
  lst = [n]
  while n>=1:
    n = math.floor(n/2)
    lst.insert(0,n)
  return lst






print(climb(100))



