import re


def has_subpattern(string):
  l = len(string)//2
  for i in range(1,l):
    if "".join(string.split(string[:i])) == "": return True
  return False


def has_subpattern_ia(string):
  if (len(string) & len(string)-1)== 0:
    subpattern_length = len(string)//2
    subpattern = string[:subpattern_length]
    pattern = subpattern + r"/1"*(len(string) // subpattern_length-1)
    return bool(re.fullmatch(pattern, string))
  else: return False


#print(has_subpattern_ia("a"))
print(has_subpattern_ia("aaaa"))
print(has_subpattern_ia("abababab"))
print(has_subpattern_ia("ababababa"))
print(has_subpattern_ia("abbaabbaabba"))
print(has_subpattern_ia("123A123a123a"))
