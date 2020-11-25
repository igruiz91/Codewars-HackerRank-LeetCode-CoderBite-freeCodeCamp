def pythagorean_triple(n):
    n = sorted(n)
    return pow(n[2], 2) == pow(n[0], 2)+pow(n[1], 2)


def pythagorean_triple_up(lst):
  a,b,c = sorted(lst)
  return a**2 + b**2 == c**2


print(pythagorean_triple_up([3, 4, 5]))
print(pythagorean_triple([1, 4, 3]))
