def no_repeat(string):
  for c in string:
    if string.count(c) == 1: return c
  return ""


def no_repeat_up(s):
  return next(c for c in s if s.count(c)==1)


print(no_repeat("aabbccdde"))
print(no_repeat_up("aabbccdde"))
