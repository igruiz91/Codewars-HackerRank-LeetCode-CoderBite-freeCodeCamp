def double_every_other(lst):
  for i in range(len(lst)):
    if(i%2): lst[i] = lst[i]*2
  return lst


def double_every_other_up(lst):
  return [ x*2 if i%2 else x for i, x in enumerate(lst)]

print(double_every_other([1, 2, 3, 4, 5]))
print(double_every_other_up([1, 2, 3, 4, 5]))
