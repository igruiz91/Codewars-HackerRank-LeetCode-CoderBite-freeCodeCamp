# def hourglassSum(arr):
#   max = 0
#   for i in range(0,1):
#     for j in range(0,4):
#       hourglass=arr[i+1][j+1]
#       for l in range(i,i+3):
#         hourglass+=arr[i][l]
#         for k in range(i, i+3):
#           hourglass+=arr[i+2][k]
#       if max < hourglass:
#         max = hourglass
#   return max

def hourglassSum(arr):
  best = float("-inf")
  for i in range(4):
    for j in range(4):
      s = sum_hourglass(arr, i,j)
      if s>best:
        best = s
  return best

def sum_hourglass(m, i , j):
  return sum(m[i][j:j+3])+ m[i+1][j+1]+ sum(m[i+2][j:j+3])

arr1 = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
]



print(hourglassSum(arr1))
