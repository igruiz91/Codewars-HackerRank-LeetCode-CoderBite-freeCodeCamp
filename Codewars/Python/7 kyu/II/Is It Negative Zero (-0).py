import math

def is_negative_zero(n):
  return math.copysign(1,n) == -1 if n == 0 else False


def is_negative_zero_up(n):
  return str(n) == "-0.0"


print(is_negative_zero(-1))
print(is_negative_zero_up(0))
print(is_negative_zero_up(-0.0))
