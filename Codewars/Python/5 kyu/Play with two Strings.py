def work_on_strings(a, b):
  resp = ""
  for ch in a:
    n = b.lower().count(ch.lower())
    if(n%2==1 and n>0):
      resp+= ch.swapcase()
    else: resp+= ch
  for ch in b:
    n = a.lower().count(ch.lower())
    if (n % 2 == 1 and n > 0):
      resp += ch.swapcase()
    else:
      resp += ch
  return resp


def work_on_strings_up(a,b):
  new_a = [letter if b.lower().count(letter.lower())%2 == 0  else letter.swapcase() for letter in a]
  new_b = [letter if a.lower().count(letter.lower())%2 == 0  else letter.swapcase() for letter in b]
  return "".join(new_a)+"".join(new_b)


# print(work_on_strings("abc", "cde"))
# print(work_on_strings("abab", "bababa"))
print(work_on_strings("abcdeFg", "defgG"))
print(work_on_strings_up("abcdeFg", "defgG"))
# abcDEfgDEFGg
# abcDEfgDEFGg
