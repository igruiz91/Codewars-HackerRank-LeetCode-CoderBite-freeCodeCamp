def multiple(x):
  return "BangBoom" if x % 15 == 0 else "Boom" if x % 5 == 0 else "Bang" if x%3==0 else "Miss"


def multiple_up(x):
  return "Bang" * (x%3==0) + "Boom" * (x%5==0) or "Miss"

print(multiple(30))
print(multiple(3))
print(multiple(98))
print(multiple(95))
print(multiple(23))
print(multiple(15))
print("--------------------------------------------------------")
print(multiple_up(30))
print(multiple_up(3))
print(multiple_up(98))
print(multiple_up(95))
print(multiple_up(23))
print(multiple_up(15))















