def last(lst):
    return lst[-1] if len(lst) else None

def last_up(lst):
  if lst: return lst[-1]


print(last([1, 2, 3]))
print(last_up([1, 2, 3]))
print(last_up([]))
