def solve(st, k):
  if k == "": return st
  resp =""
  abc = "abcdefghijklmnopqrstuvwxyz"
  for i in range(len(abc)):
    for x in st:
      if(x == abc[i]):
        resp = st.replace(x,'',1)
        st = resp
        k-=1
        if k==0: return resp
  return resp


def solve_up(st, k):
  for l in sorted(st)[:k]:
    st=st.replace(l, "",1)
  return st


def solve_up_two(st, k):
  s = st
  for c in "abcdefghijklmnopqrstuvwxyz":
    count = st.count(c)
    if count <=k:
      s= s.replace(c, "")
      k-=count
    else:
      s= s.replace(c,'', k)
      break
  return s


def solve_up_three(s, k):
  for c in "abcdefghijklmnopqrstuvwxyz":
    n =  s.count(c)
    s = s.replace(c, "", k)
    k-=n
    if k<1:
      break
  return s

print(solve('abracadabra', 8))
print(solve('abracadabra', 1))
print("================================================")
print(solve_up('abracadabra', 8))
print(solve_up('abracadabra', 1))
print("================================================")
print(solve_up_two('abracadabra', 8))
print(solve_up_two('abracadabra', 1))
