def ones_complement(binary_number):
  resp= ""
  for n in binary_number:
    if n == "0": resp+= "1"
    else: resp+="0"
  return resp


def ones_complement_up(n):
  return n.translate(str.maketrans("01", "10"))

print(ones_complement("0101"))
print(ones_complement_up("0101"))
