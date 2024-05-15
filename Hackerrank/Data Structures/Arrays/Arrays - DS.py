def reverseArray(a):
    return a[::-1]

def reverseArrayOther(a):
  return list(reversed(a))

def reverseArrayOther2(a):
  resp = []
  for x  in a:
    resp.insert(0, x)
  return resp


print(reverseArray([1,2,3]))
print(reverseArrayOther([1,2,3]))
print(reverseArrayOther2([1,2,3]))
