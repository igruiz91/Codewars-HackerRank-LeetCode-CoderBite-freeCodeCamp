def more_zeros(s):
  resp = []
  for c in s:
    t = bin(ord(c))[2:]
    if t.count("0") > t.count("1") and c not in resp: resp.append(c)
  return resp


print(more_zeros("abcdea"))
