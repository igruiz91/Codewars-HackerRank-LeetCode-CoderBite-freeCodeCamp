def pattern(n):
  resp = []
  for i in range(n+1):
    lst = list(range(i+1,n+1))
    resp.append("".join(str(x) for x in lst))
  return "\n".join(resp)[:-1]

def pattern_up(n):
  return '\n'.join(''.join(str(j) for j in range(i,n+1)) for i in range(1,n+1))


print(pattern(6))
print(pattern_up(6))
