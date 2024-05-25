from math import ceil, floor
def add(*args):
    args_sum = sum([n/(i+1) for i,n in enumerate(args)])
    return round(args_sum).__name__ if type(args_sum).__name__ == "float" else args_sum




print(add(-5, 9, 2, -7, -3, 0, -9, 4, -7, -2))
print(add(1,4,-6,20))
print(add(4,-3,-2))
print(add())
