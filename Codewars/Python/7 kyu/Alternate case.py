def alternateCase(s):
  resp = ''
  for c in s:
    c = c.lower() if c.isupper() else c.upper()
    resp+=c
  return resp


def alternateCase_up(s):
  return s.swapcase()

print(alternateCase('ABC'))
print(alternateCase('AbC'))
print(alternateCase_up('AbC'))
