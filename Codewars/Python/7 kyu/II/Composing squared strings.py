def compose(s1, s2):
  str1, str2 = s1.split('\n'), s2.split('\n')
  l = len(str1)
  resp=""
  for i in range(0, l):
    resp += str1[i][:i+1]+str2[l-i-1][:l-i] + "\n"
  return resp[:-1]


s1 = "abcd\nefgh\nijkl\nmnop"
s2 = "qrst\nuvwx\nyz12\n3456"


print(compose(s1,s2))
