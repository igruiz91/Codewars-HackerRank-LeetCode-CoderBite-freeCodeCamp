import string
digs = string.digits + string.ascii_letters


def baseConversion(n, x):
  n = int(n, x)
  return "{0:x}".format(n)




#print(numberToBase('1010100101',2))
print(baseConversion('8c4897',13))
