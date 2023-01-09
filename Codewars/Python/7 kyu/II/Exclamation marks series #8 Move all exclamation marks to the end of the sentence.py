def remove(s):
    st =  s.split('!')
    l = len(st)
    return "".join(st)+"!"*(l-1)

def remove_up(s):
  return s.replace('!', '')+s.count('!')*"!"


print(remove("Hi! Hi!"))
print(remove_up("Hi! Hi!"))
print(remove("Hi! Hi! Hi!"))
print(remove_up("Hi! Hi! Hi!"))
print(remove("Hi! !Hi Hi!"))
print(remove_up("Hi! !Hi Hi!"))
