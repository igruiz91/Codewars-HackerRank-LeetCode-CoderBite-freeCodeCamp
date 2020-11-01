def pattern(n):
    resp =''
    for i in range(n):
      for j in range(n, i,-1):
        resp+=str(j)
      resp+='\n'
    return resp


def pattern_up(n):
  return '\n'.join(''.join(map(str, range(n, stop,-1))) for stop in range(n))

print(pattern(5))
print(pattern_up(5))

