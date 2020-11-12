def factorial(n):
    return n if n == 1 else n*factorial(n-1)

def factorial(n):
    return n * factorial(n - 1) if n > 1 else 1

print(factorial(5))
