def scramble(string, array):
  l = len(string)
  resp = [0] * l
  for i in range(l):
    resp[array[i]] = string[i]
  return "".join(resp)


def scramble_up(str, arr):
  return "".join(c for _,c in sorted(zip(arr, str)))


print(scramble('abcd', [0, 3, 1, 2]))
print(scramble_up('abcd', [0, 3, 1, 2]))
