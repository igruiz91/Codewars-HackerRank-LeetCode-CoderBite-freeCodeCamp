def remove(s):
  resp =[]
  for h in s.split(" "):
    if h!="Hi!": resp.append(h)
  return "".join(resp)


print(remove("Hi! Hi!"))
