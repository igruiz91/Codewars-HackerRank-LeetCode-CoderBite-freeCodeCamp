def create_array_of_tiers(n):
  digits = str(n)
  return [digits[:i] for i in range(1,len(digits)+1)]




print(create_array_of_tiers(420))
