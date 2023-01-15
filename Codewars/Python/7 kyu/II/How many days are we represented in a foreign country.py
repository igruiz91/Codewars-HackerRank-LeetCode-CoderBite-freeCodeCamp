def days_represented(trips):
  abc = set()
  for i,j in trips:
    abc.update(range(i,j+1))
  return len(abc)


def day_represented_up(trips):
  return len({i for x,y in trips for i in range(x,y+1)})

print(days_represented([[10, 17], [200, 207]]))
print(day_represented_up([[10, 17], [200, 207]]))
