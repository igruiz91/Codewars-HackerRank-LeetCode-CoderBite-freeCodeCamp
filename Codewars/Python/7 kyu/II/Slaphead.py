def bald(s):
  lib = {0: 'Clean!', 1: 'Unicorn!', 2: 'Homer!',
         3: 'Careless!', 4: 'Careless!', 5: 'Careless!'}
  hairs = s.split('/')
  resp = lib.get(len(hairs)-1, "Hobo!")
  return ["-"*len(s), resp]

def bald_up(s):
  l = ["Clean!", "Unicorn!", "Homer!", "Careless!", "Careless!", "Careless!", "Hobo!"]
  return ['-'*len(s), l[min(6,s.count('/'))]]


print(bald('/---------'))
print(bald_up('/---------'))
#print(bald('/-----/-'))
#print(bald('--/--/---/-/---'))


#/---------
#----------
