import math
def points(n):
    count=0
    for i in range(n):
        count+=math.floor(math.sqrt(n*n-i*i))
        print(count)
    return count *4 +1



print(points(2))
print(points(3))
