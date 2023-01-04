def int_diff(lst, n):
  count = 0
  for i in range(len(lst)):
    for j in range(i+1, len(lst)):
      if abs(lst[i]-lst[j]) == n:
        count += 1
  return count


print(int_diff([1, 1, 5, 6, 9, 16, 27], 4))
print(int_diff([1, 6, 2, 3, 7, 8, 7], 0))
