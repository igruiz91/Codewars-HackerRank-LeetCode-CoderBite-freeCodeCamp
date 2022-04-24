def smallest(n):
    s = str(n)
    min1, from1, to1 = n, 0, 0
    for i in range(len(s)):
      # print("s[:i]- "+ s[:i])
      # print("s[i+1:]- " + s[i + 1:])
      removed = s[:i] + s[i+1:]
      print(removed)
      for j in range(len(removed)+1):
          num = int(removed[:j] + s[i] + removed[j:])
          # print("num:",num)
          if (num < min1):
              min1, from1, to1 = num, i, j
    return [min1, from1, to1]




#print(smallest(261235))
print(smallest(209917))
# print(smallest(1000000))
