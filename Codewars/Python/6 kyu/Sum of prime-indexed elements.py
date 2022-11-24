def total(arr):
  resp = 0
  for i, n in enumerate(arr):
    if is_prime(i) and i>1: resp+=n
  return resp


def is_prime(n):
  for i in range(2, int(n**0.5)+1):
    if n%i == 0: return False
  return True

def is_prime_up(n):
  return n>=2 and all(n%i for i in range(2, int(n**.5)+1))


def total_up(arr):
  return sum(n for i, n in enumerate(arr) if is_prime_up(i))

print(total([1,2,3,4,5,6,7,8]))
print(total_up([1,2,3,4,5,6,7,8]))
