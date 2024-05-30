def solve(a, b):
    alice, bob = 0, 0
    for i in range(3):
      if a[i] == b[i]: continue
      elif a[i] >= b[i]: alice+=1
      else: bob+=1
    if alice == bob: return f'{alice}, {bob}: that looks like a "draw"! Rock on!'
    return f'{alice}, {bob}: Bob made "Jeff" proud!' if alice < bob else f'{alice}, {bob}: Alice made "Kurt" proud!'

def solve_up(a, b):
  messages = ['that looks like a "draw"! Rock on!', 'Alice made "Kurt" proud!', 'Bob made "Jeff" proud!']
  alice, bob = 0, 0
  for i,j in zip(a,b):
    if i==j: continue
    elif i>j: alice+=1
    else: bob+=1
  if alice>bob: message = messages[1]
  elif alice<bob: message = messages[2]
  else: message = messages[0]

  return '{}, {}: {}'.format(alice, bob, message)

print(solve([47, 7, 2], [47, 7, 2]))
print(solve_up([47, 7, 2], [47, 7, 2]))
print(solve([47, 7, 2], [45, 5, 2]))
print(solve_up([47, 7, 2], [45, 5, 2]))
print(solve([47, 7, 2], [49, 52, 2]))
print(solve_up([47, 7, 2], [49, 52, 2]))


