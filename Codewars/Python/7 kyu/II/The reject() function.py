def reject(seq, predicate):
  return list(filter(_not(predicate), seq))


def reject_up(seq, predicate):
  return [item for item in seq if not predicate(item)]

def _not(fnc):
  def not_fnc(*args, **kwargs):
    return not fnc(*args, **kwargs)
  return not_fnc


print(reject([1, 2, 3, 4, 5, 6], lambda x: x %2 == 0))
print(reject_up([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
print(reject(['a', 'b', 3, 'd'], lambda x: type(x) == int))
print(reject_up(['a', 'b', 3, 'd'], lambda x: type(x) == int))
