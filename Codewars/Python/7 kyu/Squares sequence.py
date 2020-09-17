def squares(x, n):
    resp=[x]
    for i in range (n-1):
        resp.append(resp[len(resp)-1]**2)
    return resp

def squaresUp(x,n):
    return [x**(2**i) for i in range(n)]

def squaresUp2(x,n):
    return [] if n<1 else [x]+squares(x**2,n-1)

print(squares(2,5))