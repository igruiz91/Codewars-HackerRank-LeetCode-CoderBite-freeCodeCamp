def inside_out(s):
  resp = []
  for l in s.split(' '):
    if len(l)%2 == 0:
      resp.append(l[:len(l)//2][::-1] + l[len(l)//2:][::-1])
    else:
      resp.append(l[:len(l)//2][::-1] +l[len(l)//2] + l[(len(l)+1)//2:][::-1])
  return " ".join(resp)


print(inside_out("man i need a tassxxxi up to ubud"))
#print(inside_out("atix"))
#print(inside_out("atxsi"))
