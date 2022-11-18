def reverse_and_mirror(s1, s2):
  new_s1 = list(reversed(list(s1)))
  return "".join(list(reversed(list(s2.swapcase()))))+"@@@" + "".join((new_s1 + list(s1))).swapcase()


print(reverse_and_mirror('Water', 'buZZ'))


#'ESAc GNIGNAHc@@@GNISREVEr GNIRTsssTRING rEVERSING' should equal
#'ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING'
