def tidyNumber(n):
    n = str(n)
    previus=0
    for i in n:
        i=int(i)
        if i>previus:
            previus = i
        else:
            return False
    return True

def tidyNumberUp(n):
    s=list(str(n))
    return s == sorted(s)

def tidyNumberUp2(n):
    return n == int(''.join(sorted(str(n))))


print(tidyNumber(102))
print(tidyNumberUp(123))
print(tidyNumberUp2(431))