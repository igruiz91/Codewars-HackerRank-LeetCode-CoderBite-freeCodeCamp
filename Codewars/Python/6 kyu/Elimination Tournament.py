def tourney(inp):
  resp=[inp]
  while len(inp)>1:
    temp = []
    if len(inp)%2: temp.append(inp[-1])
    for i in range(0, len(inp), 2):
      temp.append(max(inp[i], inp[i+1]))
    resp.append(temp)
    inp = temp
  return resp


def tourney_up(inp):
  out = [inp]
  while len(inp)>1:
    inp = [inp[-1]] * (len(inp) % 2) + [*map(max, inp[::2], inp[1::2])]
    out.append(inp)
  return out


print(tourney([9, 5, 4, 7, 6, 3, 8, 2]))
print(tourney_up([9, 5, 4, 7, 6, 3, 8, 2]))
