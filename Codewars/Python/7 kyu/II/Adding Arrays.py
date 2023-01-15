def arr_adder(arr):
  resp = []
  for i in range(len(arr[0])):
    line = ""
    for j in range(len(arr)):
      line+=arr[j][i]
    resp.append(line)
  return " ".join(resp)


def arr_adder_up(arr):
  return " ".join(map("".join, zip(*arr)))




print(arr_adder([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]))

print(arr_adder_up([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]))
