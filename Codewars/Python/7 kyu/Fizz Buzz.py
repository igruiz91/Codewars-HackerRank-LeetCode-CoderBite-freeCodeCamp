def fizzbuzz(n):
  resp = []
  for i in range (1, n+1):
    if i % 5 == 0 and i % 3 == 0: resp.append("FizzBuzz")
    elif i % 5 == 0: resp.append("Buzz")
    elif i % 3 == 0: resp.append("Fizz")
    else: resp.append(i)
  return resp


def fizzbuzz_up(n):
  return ['Fizz'*(not i%3) + 'Buzz'*(not i%5) or i for i in range(1, n+1)]

print(fizzbuzz(15))
print(fizzbuzz_up(15))

