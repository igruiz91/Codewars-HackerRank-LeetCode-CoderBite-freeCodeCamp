def filter_homogenous(arrays):
  resp = []
  for array in arrays:
    if len(set(list(map(lambda x: x.__class__.__name__, array)))) == 1: resp.append(array)
  return resp


def filter_homogenous_up(arrays):
  return [a for a in arrays if len(set(map(type, a))) == 1]

print(filter_homogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))
print(filter_homogenous_up([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))
print(filter_homogenous([[123, 234, 432], ['', 'abc'], [''], ['a', 1], ['', '1'], []]))
print(filter_homogenous_up(
    [[123, 234, 432], ['', 'abc'], [''], ['a', 1], ['', '1'], []]))


