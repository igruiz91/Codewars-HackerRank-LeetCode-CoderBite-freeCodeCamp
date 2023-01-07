def string_breakers(n, st):
  resp =""
  st = st.replace(' ', '')
  for i in range(0,len(st),n):
    resp += st[i:i+n]+"\n"
  return resp[:-1]


def string_breakers_up(n, st):
  s = st.replace(' ', '')
  return "\n".join(s[i: i+n] for i in range(0,len(s),n))


print(string_breakers(5, 'This is an example string'))
print(string_breakers_up(5, 'This is an example string'))
