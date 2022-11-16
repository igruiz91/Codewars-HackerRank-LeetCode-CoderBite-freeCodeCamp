def shades_of_grey(n):
  resp = []
  for i in range(1, n+1):
    x = "0"+hex(i)[2:]
    resp.append('#'+x[-2:]*3)
  return resp



def shades_of_grey_up(n):
  return ['#{0:02x}{0:02x}{0:02x}'.format(i+1) for i in range(min(254, n))]

print(shades_of_grey(117))
print(shades_of_grey_up(117))
