def billboard(name, price=30):
  s = 0
  for c in name:
    s+=price
  return s

def billboard_up(name, price=30):
  return sum(price for letter in name)

frase = "Jeong-Ho Aristotelis"

print(billboard(frase))
print(billboard_up(frase))
