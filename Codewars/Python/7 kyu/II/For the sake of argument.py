def numbers(*args):
  for n in args:
    if type(n) is not int and type(n) is not float: return False
  return True



def numbers_up(*args):
  return all(type(a) in (int, float) for a in args)



print(numbers(1, 4, 3, 2, 5, 1.5))
