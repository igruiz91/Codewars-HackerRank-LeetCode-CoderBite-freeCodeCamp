def trouble(x, t):
    for i, v in enumerate(x):
      if i>0 and v + x[i-1] == t:
        del x[i]
        trouble(x,t)
    return x

def trouble_up(x, t):
  arr = [x[0]]
  for n in x[1:]:
    if n+arr[-1] != t: arr.append(n)
  return arr

print(trouble([1, 3, 5, 6, 7, 4, 3], 7))
print(trouble([2, 9, 8, 3, 7, 5, 8, 5, 8, 3], 5))
print(trouble([4, 8, 6], 8))
print(trouble([3, 4, 3, 9, 2, 6, 3], 9))  # [3, 4, 3, 9, 2, 6]
print('----------------------------------------------------------------')
print(trouble_up([1, 3, 5, 6, 7, 4, 3], 7))
print(trouble_up([2, 9, 8, 3, 7, 5, 8, 5, 8, 3], 5))
print(trouble_up([4, 8, 6], 8))
print(trouble_up([3, 4, 3, 9, 2, 6, 3], 9))  # [3, 4, 3, 9, 2, 6]
