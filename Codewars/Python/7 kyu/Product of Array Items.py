from functools import reduce

def product(numbers):
    if(numbers == None or len(numbers)==0): return None
    product=1
    for e in numbers:
        product*=e
    return product

def product_up(n):
    return reduce(lambda a,b: a*b, n) if n else None

print(product([5, 4, 1, 3, 9]))
print(product_up([5, 4, 1, 3, 9]))
print(product([]))
print(product_up(None))