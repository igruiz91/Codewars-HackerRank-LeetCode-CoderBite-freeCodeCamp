def avg_array(arrs):
  resp = arrs[0]
  for i in range(1,len(arrs)):
    for j in range(len(resp)):
      resp[j]+= arrs[i][j]
  return list(map(lambda x: x/len(arrs), resp))


def avg_array_up(arrs):
  return [sum(a)/len(a) for a in zip(*arrs)]

print(avg_array([[1, 2, 3, 4], [5, 6, 7, 8]]))
print(avg_array_up([[1, 2, 3, 4], [5, 6, 7, 8]]))
print(avg_array([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3],
      [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]))
print(avg_array_up([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3],
      [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]))
