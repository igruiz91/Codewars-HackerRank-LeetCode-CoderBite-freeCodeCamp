def find_e(s):
  return s if not s else "There is no \"e\"." if s.lower().count("e") == 0 else str(s.lower().count("e"))


def find_e_up(s):
  return s and str(s.lower().count('e') or 'There is no "e".')

print(find_e(""))
print(find_e(None))
print(find_e("actual"))
print(find_e("English"))
print("--------------------------------------------------------")
print(find_e_up(""))
print(find_e_up(None))
print(find_e_up("actual"))
print(find_e_up("English"))
