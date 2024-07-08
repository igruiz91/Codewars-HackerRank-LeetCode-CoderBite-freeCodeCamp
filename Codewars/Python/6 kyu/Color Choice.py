from math import factorial


def checkchoose(m, n):
    for x in range(n + 1):
        if factorial(n) // (factorial(x) * factorial(n - x)) == m:
            return x
    return -1


# n! / (x! * (n - x)!) = m

print(checkchoose(6, 4))
print(checkchoose(35, 7))
print(checkchoose(4, 2))
print(checkchoose(381727591791742752833844, 98))
