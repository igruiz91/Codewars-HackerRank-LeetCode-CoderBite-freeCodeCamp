"""
aabbca
aba
a
"""
from collections import Counter

def removeFirstDuplicate(str):
  resp = []
  hash_map = {}

  while len(str) > 0:
    for i in range(len(str)):
      c = str[i]
      if c not in hash_map:
        hash_map[c] =  True

    for key in hash_map.keys():
      str = str.replace(key, "", 1)

    resp.append(str)
    print(resp)
  return resp[-2] if len(resp) > 2 else str



test1 = removeFirstDuplicate("aabbac")
test2 = removeFirstDuplicate("bac")



def removeFirstDuplicateUp(str):
  cntr = Counter(str)
  return cntr




print(removeFirstDuplicateUp("aabbac"))
print(removeFirstDuplicateUp("aabxxxbabc"))
##axxbab
##xab
##

