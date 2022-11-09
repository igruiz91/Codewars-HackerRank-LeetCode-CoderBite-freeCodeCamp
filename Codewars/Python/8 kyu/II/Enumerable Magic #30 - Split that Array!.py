def partition(arr, classifier_method):
  l = list(filter(classifier_method, arr))
  resp = list(set(arr) - set(l))
  return l, resp


def partition_up(arr, fnc):
  return [x for x in arr if fnc(x)], [x for x in arr if not fnc(x)]

def partition_up_two(arr, fnc):
  l, r = [], []
  for e in arr:
    if fnc(e): l.append(e)
    else: r.append(e)
  return l,r

animals = ["cat", "dog", "duck", "cow", "donkey"]
print(partition(animals, lambda x: len(x) == 3))
print(partition_up(animals, lambda x: len(x) == 3))
print(partition_up_two(animals, lambda x: len(x) == 3))
