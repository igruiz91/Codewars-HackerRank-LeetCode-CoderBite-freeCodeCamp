def sum_even_numbers(seq):
  sum=0
  for n in seq:
    if not n%2:
      sum+=n
  return sum

def sum_even_up(seq):
  return sum(n for n in seq if not n%2)


def sum_even_numbers_up(seq):
  return sum(filter(lambda n: n%2==0, seq))

print(sum_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(sum_even_up([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(sum_even_numbers_up([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
