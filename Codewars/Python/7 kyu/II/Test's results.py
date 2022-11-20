from statistics import mean

def test(r):
  lib = {'h':0,'a':0, 'l':0}
  prom = 0
  for n in r:
    prom+=n
    if n>8: lib['h']+=1
    elif n>5: lib['a']+=1
    else: lib['l']+=1
  return [round(prom/len(r), 3), lib] if lib['h'] != len(r) else [round(prom/len(r), 3), lib, 'They did well']


def test_up(r):
  dct = {'h': 0, 'a': 0, 'l': 0}
  for n in r: dct['hal'[n>6 +n>8]]+=1
  return [round(mean(r), 3), dct] + ['They did well'] * (sum(dct.values()) == dct['h'])


print(test([10, 9, 9, 10, 9, 10, 9]))
print(test_up([10, 9, 9, 10, 9, 10, 9]))
