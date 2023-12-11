from fractions import Fraction
import math


def expanded_form(num):
  dec = int(num)
  for i in range(len(str(dec))):
    print(int(dec/10)*10**i)
  #return len(num)



print(expanded_form(807.304))
