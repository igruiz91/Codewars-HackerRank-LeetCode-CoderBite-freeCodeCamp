def prev_mult_of_three(n):
  split = str(n)
  for i in range(len(split)):
    x =int(split[0:-i or len(split)])
    if x%3 == 0: return x
  return None


def prev_mult_of_three_up(n):
  while n%3: n//=10
  return n or None

print(prev_mult_of_three(1244))
