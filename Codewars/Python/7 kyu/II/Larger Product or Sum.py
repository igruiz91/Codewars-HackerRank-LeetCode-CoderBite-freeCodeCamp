from math import prod


def sum_or_product(array, n):
    arr = list(sorted(array))
    m = prod(arr[:n])
    s = sum(arr[-n:])
    return "sum" if s > m else "product" if m > s else "same"


print(sum_or_product([10, 41, 8, 16, 20, 36, 9, 13, 20], 3))
