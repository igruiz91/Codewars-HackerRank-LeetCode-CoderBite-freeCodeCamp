def moving_average(values, n):
    resp = []
    for i in range(0, len(values)-n+1):
        s = 0
        for j in range(n):
            s += values[i+j]
        resp.append(s/n)
    return resp


print(moving_average([40, 30, 50, 46, 39, 44], 3))
