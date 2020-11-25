def plural(n):
    return False if n==1 else True

def plural_up(n):
    return n!=1


print(plural(1))
print(plural(10))
print(plural_up(1))
print(plural_up(10))