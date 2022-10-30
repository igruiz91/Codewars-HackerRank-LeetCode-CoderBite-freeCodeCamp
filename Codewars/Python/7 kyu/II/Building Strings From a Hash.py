def solution(pairs):
  return ",".join(sorted(["{} = {}".format(k,v) for k,v in pairs.items()]))


#print(solution({'a': 1, 'b': 2}))
print(solution({1: -9, 'a': -5, 'c': -3, 'x': -9, 2: -1, 'y': 5, 0: -5}))
#print(solution({2: -6, 'a': -6, 1: -8, 0: -2, 'b': 4}))
