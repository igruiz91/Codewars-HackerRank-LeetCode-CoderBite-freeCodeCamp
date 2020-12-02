def summy(s):
    return sum(int(x) for x in s.split())


def summy_up(s):
  return sum(map(int, s.split()))

def summy_up_2(s):
  return eval(s.replace(' ', '+'))

print(summy("1 2 3"))
print(summy_up("1 2 3"))
print(summy_up_2("1 2 3"))
