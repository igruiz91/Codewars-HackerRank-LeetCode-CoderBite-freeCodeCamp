def geometric_sequence_elements(a, r, n):
    return ", ".join([str(a*r**x) for x in range(n)])


print(geometric_sequence_elements(2, 3, 5))
