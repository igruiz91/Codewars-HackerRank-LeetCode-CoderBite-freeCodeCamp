def palindrome(num, s):
    if not isinstance(num, int) or not isinstance(s, int) or num<0 : return "Not valid"
    res = []
    while s>0:
      if check_palindrome(num):
        res.append(num)
        s-=1
      num+=1
    return res

def check_palindrome(n):
  if n<10: return False

  original_num = n
  reversed_num = 0

  while n>0:
    digit = n%10
    n = n//10
    reversed_num = reversed_num *10+digit
  return original_num == reversed_num



                print(check_palindrome('abcde'))

def palindrome_up(n, s):
  if not (type(n) == type(s) == int) or n<0 or s<0: return "Not valid"
  res = []
  while len(res)!=s:
    if str(n) == str(n)[::-1] and n>10:
      res.append(int(n))
    n+=1
  return res



print(palindrome(6,4),palindrome_up(6,4))
print(palindrome(19,3),palindrome_up(19,3))
print(palindrome("19",3),palindrome_up("19",3))
print(palindrome("19","3"),palindrome_up("19","3"))
print(palindrome(19,"3"),palindrome_up(19,"3"))

