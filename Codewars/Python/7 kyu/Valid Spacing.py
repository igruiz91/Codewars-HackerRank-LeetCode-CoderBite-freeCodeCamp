def valid_spacing(s):
  return s == ' '.join(s.split())


def valid_spacing_up(s):
  return s == s.strip() and ' ' not in s

print(valid_spacing('Hello  world'))
