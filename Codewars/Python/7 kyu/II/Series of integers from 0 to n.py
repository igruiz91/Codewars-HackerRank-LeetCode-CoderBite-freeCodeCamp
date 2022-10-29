def generate_integers(n):
  resp = []
  for i in range(n+1): resp.append(i)
  return resp


def generate_integers_up(n):
  return list(range(0, n+1))

print(generate_integers(4))
print(generate_integers_up(4))
