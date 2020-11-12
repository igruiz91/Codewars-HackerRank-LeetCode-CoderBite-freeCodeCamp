def multiples(m, n):
  resp = []
  for x in range(1,m+1):
    resp.append(n*x)
  return resp


def multiples_up(m,n):
  return [i* n for i in range(1, m+1)]