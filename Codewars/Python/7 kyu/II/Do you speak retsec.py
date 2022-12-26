def reverse_by_center(s):
  mid = len(s)//2
  return s[1+mid:]+s[mid] + s[:mid] if len(s) % 2 else s[mid:] + s[:mid]


print(reverse_by_center("secret"))
print(reverse_by_center("agent"))

