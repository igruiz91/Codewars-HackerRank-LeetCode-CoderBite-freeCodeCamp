def string_merge(string1, string2, letter):
  resp = ""
  for c in string1.split(letter)[0]:
    resp+=c
  resp+=letter
  for c in string2.split(letter,1)[1]:
    resp += c
  return resp


def string_merge_up(str1, str2, l):
  return str1[:str1.index(l)] + str2[str2.index(l):]


print(string_merge("hello", "worlld", "l"))
print(string_merge_up("hello", "worlld", "l"))
