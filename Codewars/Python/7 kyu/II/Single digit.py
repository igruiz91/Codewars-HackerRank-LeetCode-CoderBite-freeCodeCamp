def single_digit(n):
  return single_digit(sum([int(n) for n in list(bin(n)[2:])])) if n > 9 else n


def single_digit_up(n):
  while n>9:
    n = bin(n).count('1')
  return n

print(single_digit(5))
print(single_digit(5665))
print(single_digit_up(5))
print(single_digit_up(5665))
