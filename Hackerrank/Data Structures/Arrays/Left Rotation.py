def rotateLeft(d, arr):
    for _ in range(d):
      val = arr.pop(0)
      arr.append(val)
    return arr

print(rotateLeft(2, [1,2,3,4,5]))
