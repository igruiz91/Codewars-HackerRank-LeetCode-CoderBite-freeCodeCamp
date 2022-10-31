def createDict(keys, values):
  resp = {}
  for i in range(len(keys)):
    try: v = values[i]
    except IndexError: v = None
    resp[keys[i]] = v
  return resp


def createDict_up(k,v):
  return dict(zip(k, v+ [None] * (len(k) - len(v))))

def createDict_up_two(k, v):
  while len(k)>len(v): v.append(None)
  return dict(zip(k, v))

print(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]))
print(createDict_up(['a', 'b', 'c', 'd'], [1, 2, 3]))
print(createDict_up_two(['a', 'b', 'c', 'd'], [1, 2, 3]))
