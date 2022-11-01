def sort_by_bit(arr):
  binSorted = sorted([bin(n).replace("0b" , "0" * (6-len(str(n))-3)) for n in arr])
  return list(map(lambda x: int(x,2)  , binSorted))


print(sort_by_bit([3, 8, 3, 6, 5, 7, 9, 255]))
