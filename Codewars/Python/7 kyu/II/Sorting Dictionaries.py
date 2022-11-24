def sort_dict(d):
  return sorted(d.items(), key=lambda pair: pair[1], reverse=True)


print(sort_dict({3: 1, 2: 2, 1: 3}))
print(sort_dict({1: 2, 2: 4, 3: 6}))
