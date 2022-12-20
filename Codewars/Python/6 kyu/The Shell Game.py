def find_the_ball(start, swaps):
  resp = start
  for n in swaps:
    if resp in n: resp = n[0] if n[1] == resp else n[1]
  return resp


print(find_the_ball(0, [(0, 1), (2, 1), (0, 1)]))
print(find_the_ball(5, []))
