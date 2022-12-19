def shorter_reverse_longer(a,b):
  if len(a) < len(b): return "".join([a] +list(reversed(b))+[a])
  else: return "".join([b] +list(reversed(a))+[b])


print(shorter_reverse_longer("first", "abcde"))
