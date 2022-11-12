import math
def is_square(arr):
  return all(list(map(lambda x: math.sqrt(x)%1==0, arr))) if len(arr) else None

def is_square_up(arr):
  if arr: return all((a**0.5).is_integer() for a in arr)





print(is_square([1, 4, 9, 16, 25, 36]))
print(is_square_up([1, 4, 9, 16, 25, 36]))
print(is_square([1, 2, 3, 4, 5, 6]))
print(is_square([]))
