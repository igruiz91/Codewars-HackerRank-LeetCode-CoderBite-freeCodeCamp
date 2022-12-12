def changer(s):
  abc = "abcdEfghIjklmnOpqrstUvwxyzAb"
  resp = ""
  for c in s.lower():
    if c in "aeiou": c = c.upper()
    idx = abc.find(c)
    if idx>-1:
      resp+= abc[idx+1]
    else: resp+=c
  return resp


def changer(s):
  return s.lower().translate(str.maketrans("abcdefghijklmnopqrstuvwxyz", "bcdEfghIjklmnOpqrstUvwxyzA"))

print(changer("AJtG8ajOvFO klZDS Xz5YkQiCDwZ"))  # bmjdf
#bkUh8bkpwgp lmAEt YA5ylrjdExA
#bkUh8bkpwgp lmAEt yA5zlrjdExA
