def explode(s):
  return "".join(int(x)*x for x in s)


print(explode("312"))
