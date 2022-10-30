def beggars(values, n):
  resp = []
  for i in range(n):
    resp.append(sum(values[i::n]))
  return resp

def beggars_up(v,n):
  return [sum(v[i::n]) for i in range(n)]

print(beggars([1, 2, 3, 4, 5], 1))
print(beggars_up([1, 2, 3, 4, 5], 1))
print(beggars([1, 2, 3, 4, 5], 2))
print(beggars_up([1, 2, 3, 4, 5], 2))
