def mirror(data):
  sdata = list(sorted(data))
  rsdata = list(reversed(sdata))[1:]
  return sdata+rsdata


def mirror_up(data):
  arr = sorted(data)
  return arr+arr[-2::-1]

print(mirror([1, 3, 2]))
print(mirror_up([1, 3, 2]))
