def smaller(arr):
  resp = []
  for i in range(len(arr)):
    count=0
    for j in range(i+1, len(arr)):
      if(arr[j]<arr[i]):
        count+=1
    resp.append(count)
  return resp


def smaller_up(arr):
  return [len([a for a in arr[i:] if a<arr[i]]) for i in range(0, len(arr))]


def smaller_up_2(arr):
  return [sum(b<a for b in arr[i+1:]) for i,a in enumerate(arr)]

print(smaller([5, 4, 3, 2, 1]))
print(smaller_up([5, 4, 3, 2, 1]))
print(smaller_up_2([5, 4, 3, 2, 1]))
