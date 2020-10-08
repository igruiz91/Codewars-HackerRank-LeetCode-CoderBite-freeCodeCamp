def addTwoDigits(n):
  digits = []
  while n>0:
    digits.append(n%10)
    n //= 10
  return sum(digits)

def addTwoDigitsUp(n):
  return int(n/10 + n%10)

def addTwoDigitsUp2(n):
  return n//10 + n%10


print(addTwoDigits(29))
print(addTwoDigitsUp(29))
print(addTwoDigitsUp2(29))
