def arrayManipulation(n, queries):
    arr = [0]*(n+2)
    for a,b,k in queries:
      arr[a] +=k
      arr[b+1] -=k

    max_value = temp = 0
    for element in arr:
      temp+= element
      max_value  = max(max_value,temp)

    return max_value




print(arrayManipulation(10, [[1,5,3],[4,8,7], [6,9,1]]))
