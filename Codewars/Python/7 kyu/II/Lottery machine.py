def lottery(s):
  resp = []
  trigger = False
  for c in s:
    if c.isdigit() and c not in resp:
      resp += c
      trigger = True
  return "".join(resp) if trigger else "One more run!"




def lottery_up(s):
  return "".join(dict.fromkeys(filter(str.isdigit, s))) or "One more run!"


print(lottery("wQ8Hy0y5m5oshQPeRCkG"))
print(lottery_up("wQ8Hy0y5m5oshQPeRCkG"))
