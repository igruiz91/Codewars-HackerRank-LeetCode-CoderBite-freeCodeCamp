def solve(arr):
  resp =[]
  for i in range(0,len(arr)):
    count = 0
    for j in range(i+1,len(arr)):
      if arr[i]<=arr[j]: count=arr[j]
    if count< arr[i]: resp.append(arr[i])
  return resp

def solve_up(arr):
  resp =[]
  for v in arr[::-1]:
    if not resp or resp[-1]<v: resp.append(v)
  return resp[::-1]


def solve_up_two(arr):
  return [x for i,x in enumerate(arr) if x>max(arr[i+1:]+[0])]


print(solve_up_two([16, 17, 14, 3, 14, 5, 2]))
print(solve_up([16, 17, 14, 3, 14, 5, 2]))
print(solve([16, 17, 14, 3, 14, 5, 2]))
