primes=[2,3,5,7]

def is_prime(n):
    if n in primes: return False
    if n < 2: return False
    if n == 2: return True
    if n % 2 == 0: return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    primes.append(n)
    return True



print(is_prime(35411))
print(is_prime(3707))
# print(is_prime(11))
