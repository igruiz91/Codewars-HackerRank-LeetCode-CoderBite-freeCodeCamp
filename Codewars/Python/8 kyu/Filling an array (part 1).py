def arr(n=None):
  return [i for i in range(n)] if n else []

def arr_up(n=0):
  return [i for i in range(n)]

def arr_up2(n=0):
  return list(range(n))
  
def arr_up3(n=0):
  return [*range(n)]

print(arr(10))
print(arr_up(10))
print(arr_up2(10))
print(arr_up3(10))
print(arr())
