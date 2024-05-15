def any_odd(x):
  bin_x =bin(x)
  print(bin_x)
  bin_bits = list(reversed(bin_x[2:]))
  print("".join(bin_bits))
  for i in range(len(bin_bits)):
    if i%2 == 1 and bin_bits[i] == '1':
      print(i, bin_bits[i])
      return True
  return False


print(any_odd(9684911365))

## ['1', '0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1']
##01001000001010001000000010100000101
##0b1001000001010001000000010100000101
##1010000010100000001000101000001001

# print(any_odd(2))
# print(any_odd(5))
# print(any_odd(85))
# print(any_odd(128))

