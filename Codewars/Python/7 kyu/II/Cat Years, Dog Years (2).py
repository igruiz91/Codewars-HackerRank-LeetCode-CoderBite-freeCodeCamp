def calcYears(n, a):
    count = 2
    i=0
    while n > 0:
      if count == 2:
          n -= 15
          count -= 1
      elif count == 1:
          n -= 9
          count -= 1
      else:
          if a:
              n -= 5
          else:
              n -= 4
      if n<0: break
      i+=1
    return i


def owned_cat_and_dog(cat_years, dog_years):
    cat = calcYears(cat_years, False)
    dogs= calcYears(dog_years, True)
    return [cat, dogs]


def owned_cat_and_dog_up(c,d):
  cats = 0 if c<15 else 1 if c<24 else 2+(c-24)//4
  dogs = 0 if d<15 else 1 if d<24 else 2+(d-24)//5
  return [cats, dogs]

print(owned_cat_and_dog(15, 15))
print(owned_cat_and_dog_up(15, 15))
print(owned_cat_and_dog(56, 64))
print(owned_cat_and_dog_up(56, 64))
