def bar_triang(pointA, pointB, pointC):  # points A, B and C will never be aligned
    xO = (pointA[0]+pointB[0]+pointC[0])/3
    yO = (pointA[1]+pointB[1]+pointC[1])/3
    return [round(xO, 4), round(yO, 4)]  # coordinates of the barycenter expressed up to four decimals
    # (rounded result)


def bar_triang_up(a,b,c):
  return [round(sum(x)/3, 4) for x in zip(a,b,c)]


print(bar_triang([4, 6], [12, 4], [10, 10]))
print(bar_triang_up([4, 6], [12, 4], [10, 10]))
