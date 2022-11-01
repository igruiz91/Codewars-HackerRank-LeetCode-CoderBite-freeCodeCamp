def next_item(xs, item):
  resp = None
  found = False
  for x in xs:
    if found:
      resp = x
      break
    if x==item: found = True
  return resp


def next_item_up(xs, item):
  x = iter(xs)
  for i in x:
    if i==item: break
  return next(x, None)

print(next_item([1, 2, 3, 4, 5, 6, 7], 3))
print(next_item(['a', 'b', 'c'], 'd'))
print(next_item(['Joe', 'Bob', 'Sally'], 'Bob'))
print(next_item(['a', 'b', 'c'], 'd'))
print("================================================")
print(next_item_up([1, 2, 3, 4, 5, 6, 7], 3))
print(next_item_up(['a', 'b', 'c'], 'd'))
print(next_item_up(['Joe', 'Bob', 'Sally'], 'Bob'))
print(next_item_up(['a', 'b', 'c'], 'd'))
