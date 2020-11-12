def largest(n, xs):
  return sorted(xs)[-n:]

def largest_other(n, xs):
  xs.sort()
  return xs[-n:]

print(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
print(largest_other(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
