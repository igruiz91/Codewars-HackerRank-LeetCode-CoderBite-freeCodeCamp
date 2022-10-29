def ghostbusters(building):
  return building.replace(' ', '') if " " in building else "You just wanted my autograph didn't you?"


print(ghostbusters("Sky scra per"))
print(ghostbusters("Skyscraper"))
print(ghostbusters("Suite  "))
