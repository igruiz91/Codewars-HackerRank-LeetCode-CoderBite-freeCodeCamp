def swap(s, n):
  resp = ""
  binNum = bin(n)[2:]
  l = len(binNum)
  for i in range(l):
    if binNum[i] == "1":
      resp+= s[i].swapcase()
    else: resp+=s[i]
  print(binNum)
  return resp+s[l:]

print(swap('Hello world!', 11))
