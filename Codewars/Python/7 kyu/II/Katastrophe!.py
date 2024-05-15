def strong_enough(earthquake, age):
  calc=1
  decay = 1000
  for arr in earthquake:
    calc *= sum(arr)
  decay = 1000* pow(0.99, age)
  return "Needs Reinforcement!" if calc >= decay else "Safe!"





for i,j in zip(range(10), range(4,10)):
  print( i, j)

# print(strong_enough([[5,3,7],[3,3,1],[4,1,2]], 2))
# print(strong_enough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 2))
