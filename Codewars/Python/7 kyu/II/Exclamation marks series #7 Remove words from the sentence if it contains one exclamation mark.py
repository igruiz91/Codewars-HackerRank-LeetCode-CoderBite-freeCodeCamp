def remove(s):
  resp = []
  for h in s.split(" "):
    if h.count('!')!=1:
      resp.append(h)
  return " ".join(resp)


def remove_up(s):
  return " ".join(w for w in s.split(" ") if w.count('!')!=1)



print(remove("hi! !hi! !hi !!hi"))
print(remove_up("hi! !hi! !hi !!hi"))
