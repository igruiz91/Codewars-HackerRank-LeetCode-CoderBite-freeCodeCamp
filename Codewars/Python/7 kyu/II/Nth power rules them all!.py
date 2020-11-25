def modified_sum(a, n):
    return sum(pow(x, n) for x in a)-sum(a)


def modified_sum_up(a,n):
  return sum(x**n -x for x in a)



print(modified_sum([1, 2, 3], 3))
print(modified_sum_up([1, 2, 3], 3))
