
def mispelled(w1, w2):
  word1 = min(w1, w2)
  word2 = max(w1, w2)
  return checkFoward(w1,w2) or checkBackward(w1,w2)


def checkFoward(w1, w2):
  count=0
  for c in range(len(w1)):
    if w1[c] != w2[c]: count+=1
    if count == 2: return False
  return True


def checkBackward(w1, w2):
  count = 0
  for c in range(len(w1),0,-1):
    if w1[c] != w2[c]: count+=1
    if count == 2: return False
  return True

print(mispelled('versed', 'xersed'))
print(mispelled('versed', 'applb'))
