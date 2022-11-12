import math

def pyramid(balls):
  if balls == 1:
    return 1
  start = math.floor(balls**0.5)
  while start * (start+1) / 2 <= balls:
    start += 1
  return start-1

def pyramid_up(balls):
  return ((8*balls+1)**0.5 -1)//2

print(pyramid(2211))
print(pyramid_up(2211))
# print(pyramid(15))
# print(pyramid(10))


# n * (n+1)
#----------- = 15 *2
#

# n ^2 +n = 30


