def find_missing(arr1, arr2):
    for c in arr1:
        if arr1.count(c)!= arr2.count(c):
            return c

def find_missing_up(arr1, arr2):
  calc = 0
  for i in range(len(arr1)-1):
    calc += arr1[i]-arr2[i]
  return arr1[i]-calc

print(find_missing([1, 2, 2, 3], [1, 2, 3]))
