def inside_out(st):
  n = len(st)
  mid = n//2 if n%2 == 0 else n//2+1
  resp =""
  for i in range(n):
    if(i<mid):
      left =  st[:mid]
      for j in range(mid):
        aux = left[j]
        left[j] = left[mid-1]
        left[len(left)-j] = aux
    else:
      right = st[mid:]
      print(right)
      for j in range(mid):
        aux = right[j]
        right[j] = right[mid-1]
        right[len(right)-j] = aux
  return left+right


print(inside_out("atix"))
print(inside_out("atxsi"))
