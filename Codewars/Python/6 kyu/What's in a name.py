def name_in_str(str, name):
  i = 0
  s = list(str.lower())
  for c in list(name.lower()):
    if c not in s: return False
    try:
      idx = s.index(c, i)
    except: return False
    i=idx+1
  return True


def name_in_str_up(str, name):
  it = iter(str.lower())
  return all(c in it for c in name.lower())

print(name_in_str("ppipip", "Pippi"))
print(name_in_str("Across the rivers", "chris"))
print(name_in_str('A crew that boards the ship', 'chris'))
print(name_in_str("Under a sea", "chris"))
print("----------------------------------------------------------------")
print(name_in_str_up("ppipip", "Pippi"))
print(name_in_str_up("Across the rivers", "chris"))
print(name_in_str_up('A crew that boards the ship', 'chris'))
print(name_in_str_up("Under a sea", "chris"))
