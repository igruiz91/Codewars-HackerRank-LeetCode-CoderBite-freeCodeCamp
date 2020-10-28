def consecutive(arr, a, b):
  for i in range(0, len(arr)-1):
    if arr[i] == a and arr[i+1] == b: return True
    if arr[i] == b and arr[i+1]==a: return True
  return False

def consecutive_up(arr, a, b):
  return abs(arr.index(a)-arr.index(b)) ==1

def consecutive_up_2(arr, a,b):
  return any(f == a and s==b or f==b and s==a for f,s in zip(arr, arr[1:]) )

print(consecutive([1, 3, 5, 7], 3, 7))
print(consecutive([1, 3, 5, 7], 3, 1))
print(consecutive_up([1, 3, 5, 7], 3, 1))
print(consecutive_up_2([1, 3, 5, 7], 3, 1))
