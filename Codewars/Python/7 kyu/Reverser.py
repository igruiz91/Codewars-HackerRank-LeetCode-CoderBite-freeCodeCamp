def reverse(n):
  resp = 0
  while(n>0):
    reminder = n%10
    resp = (resp*10)+reminder
    n= n//10
  return resp

def reverse_up(n):
  return int(str(n)[::-1])


def reverse_up_2(n, acc=0):
  return acc if n == 0 else reverse_up_2(n//10, acc*10+n % 10)

print(reverse(1234))
print(reverse_up(1234))
print(reverse_up_2(1234))
