def solve(s, g):
  count = 0
  while count<s:
    x = s-(s-g) + count
    y = s-g - count
    if(x%g==0 and y%g==0): return x,y
    count +=1
  return -1

print(solve(12,4))
