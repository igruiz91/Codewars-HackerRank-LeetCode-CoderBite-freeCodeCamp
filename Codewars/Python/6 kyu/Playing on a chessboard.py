from fractions import Fraction
def game_try(n):
  if n == 0: return [0]
  adition =0
  for i in range(1,n+1):
    for j in range(1,n+1):
      num = j/(i+j)
      adition+=round(num,3)
  return [int(adition)] if adition>=1 else [1,Fraction(adition).denominator]

def game(n):
  return [n/2*n] if n%2 == 0 else [n**2, 2]

print(game(8))
print(game(1))



