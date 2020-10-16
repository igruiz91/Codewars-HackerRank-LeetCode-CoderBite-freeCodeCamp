def candies(n, m):
  return m//n*n


#modo correcto caramelos totales menos el modulo
def candies_up(n, m):
  return m-m%n



print(candies(3, 10))
print(candies_up(3, 10))
