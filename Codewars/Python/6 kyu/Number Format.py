def number_format(n):
  return format(n, ",d")

def number_format_up(n):
  return f'{n:,}'


print(number_format(100000))
print(number_format(-100000))
