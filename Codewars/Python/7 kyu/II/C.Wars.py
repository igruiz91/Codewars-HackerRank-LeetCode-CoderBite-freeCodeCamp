def initials(name):
  lst = name.split()
  lst_names = [n[0].upper() for n in lst[:-1]]
  lst_last_name = [lst[-1:][0].capitalize()]
  return ".".join(lst_names + lst_last_name)


def initials_up(name):
  lst = name.split()
  return ('.'.join(x[0] for x in lst)+lst[-1][1:]).title()

print(initials("code wars"))
print(initials_up("code wars"))

