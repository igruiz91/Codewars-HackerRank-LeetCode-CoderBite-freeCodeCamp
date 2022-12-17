import math

def sum_square_even_root_odd(nums):
  resp = 0
  for n in nums:
    if n % 2 == 0: resp+= n**2
    else: resp+= math.sqrt(n)
  return round(resp,2)


def sum_square_even_root_odd_up(nums):
  return round(sum(n**(0.5 if n%2 else 2) for n in nums), 2)


print(sum_square_even_root_odd([4, 5, 7, 8, 1, 2, 3, 0]))
print(sum_square_even_root_odd_up([4, 5, 7, 8, 1, 2, 3, 0]))
print(sum_square_even_root_odd([1, 14, 9, 8, 17, 21]))
print(sum_square_even_root_odd_up([1, 14, 9, 8, 17, 21]))
