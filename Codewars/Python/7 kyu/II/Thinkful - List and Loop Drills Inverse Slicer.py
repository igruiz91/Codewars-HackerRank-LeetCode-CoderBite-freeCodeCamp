def inverse_slice(items, a, b):
  return items[:a] + items[b:]


def inverse_slice_up(items, a, b):
  del items[a:b]
  return items

print(inverse_slice([12, 14, 63, 72, 55, 24], 2, 4))
print(inverse_slice_up([12, 14, 63, 72, 55, 24], 2, 4))
