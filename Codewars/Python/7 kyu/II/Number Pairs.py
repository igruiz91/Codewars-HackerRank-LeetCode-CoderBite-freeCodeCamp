def get_larger_numbers(a, b):
  resp = []
  for i in range(len(a)):
    resp.append(max(a[i], b[i]))
  return resp


def get_larger_numbers_up(a, b):
  return [max(x, y) for x, y in zip(a,b)]


def get_larger_numbers_up_two(a, b):
  return map(max,a,b)

a = [13, 64, 15, 17, 88]
b = [23, 14, 53, 17, 80]

print(get_larger_numbers(a,b))
print(get_larger_numbers_up(a, b))
print(get_larger_numbers_up_two(a, b))
