def diamond(n):
    if n % 2 == 0 or n < 0:
        return None
    resp = []
    count = 1
    spaces = n//2
    for i in range(n//2+1):
        resp.append(" "*spaces+'*'*count)
        spaces -= 1
        count += 2
    bottom = list(reversed(resp.copy()[0:-1]))
    return "\n".join(resp+bottom)+'\n'

def diamond_up(n):
  if n >0 and n%2==1:
    diamond=""
    for i in range(n):
      diamond += " " * abs((n//2) - i)
      diamond += "*"*(n-abs((n-1) -2 * i))
      diamond += "\n"
      print(n,(abs((n-1) - 2 * i)))
    return diamond
  else: return None


print(diamond_up(5))
print(diamond_up(17))
print(diamond_up(17))

