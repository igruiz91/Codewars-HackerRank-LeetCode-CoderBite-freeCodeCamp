def eliminate_unset_bits(number):
  return pow(2, number.count("1"))-1

print(eliminate_unset_bits("11010101010101"))
