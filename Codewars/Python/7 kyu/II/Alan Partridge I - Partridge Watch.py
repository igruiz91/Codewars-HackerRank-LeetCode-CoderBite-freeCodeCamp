abc =["Partridge",
 "PearTree",
 "Chat",
 "Dan",
 "Toblerone",
 "Lynn",
 "AlphaPapa",
 "Nomad"]
def part(arr):
  count=0
  for w in arr:
    count+=abc.count(w)
  return "Lynn, I've pierced my foot on a spike!!" if count == 0 else "Mine's a Pint"+"!"*count


def part_up(arr):
  dic={'Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'}
  s = "".join("!" for w in arr if w in dic)
  return "Mine's a Pint" + s if s else "Lynn, I've pierced my foot on a spike!!"

print(part(["Grouse", "Partridge", "Pheasant"]))
print(part(["Pheasant", "Goose", "Starling", "Robin"]))
print(part(["Grouse", "Partridge", "Partridge", "Partridge", "Pheasant"]))
print(part_up(["Grouse", "Partridge", "Partridge", "Partridge", "Pheasant"]))
