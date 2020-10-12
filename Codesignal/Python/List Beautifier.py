def listBeautifier(a):
    res = a[:]
    while res and res[0] != res[-1]:
        [a,*b, c] = res
    return res


print(listBeautifier([3, 4, 2, 4, 38, 4, 5, 3, 2]))