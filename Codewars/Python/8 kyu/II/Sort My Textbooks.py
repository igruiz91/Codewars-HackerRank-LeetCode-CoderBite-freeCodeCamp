def sorter(textbooks):
  return list(sorted(textbooks, key=str.casefold))

print(sorter(['Algebra', 'History', 'Geometry', 'English']))
print(sorter(['Algebra', 'history', 'Geometry', 'english']))

