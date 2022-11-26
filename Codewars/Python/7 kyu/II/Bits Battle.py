def bits_battle(numbers):
  odds, evens = "", ""
  for n in  numbers:
    if n == 0: continue
    if n%2: odds += bin(n)[2:]
    else: evens += bin(n)[2:]
  print(odds,evens)
  return 'odds win' if odds.count("1") > evens.count("0") else 'evens win' if odds.count("1") < evens.count("0") else "tie"

print(bits_battle([0,1,2]))
#print(bits_battle([1, 13, 16]))
#print(bits_battle([5, 3, 14]))
#print(bits_battle([3, 8, 22, 15, 78]))
