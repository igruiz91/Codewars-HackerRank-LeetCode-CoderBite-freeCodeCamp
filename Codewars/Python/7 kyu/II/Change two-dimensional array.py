def matrix(array):
    temp = array
    for i, arr in enumerate(temp):
      if arr[i] <0: arr[i] = 0
      else: arr[i] = 1
    return temp


arr1 = [
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
print(matrix(arr1))
