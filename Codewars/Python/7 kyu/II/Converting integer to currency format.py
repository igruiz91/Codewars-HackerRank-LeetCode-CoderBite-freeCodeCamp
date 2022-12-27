def to_currency(price):
  resp = ""
  p = str(price)
  count = 0
  for i in range(len(p), 0, -1):
    if i == 1:
      resp += p[0]
      break
    if count == 2 :
      resp+= p[i-1]+ ","
      count = 0
    else:
      count += 1
      resp+= p[i-1]
  return "".join(list(reversed(resp)))


def to_currency_up(price):
  return format(price, ',d')


print(to_currency(123456))
print(to_currency(1234567))
print(to_currency(123456789012))


print(to_currency_up(123456))
print(to_currency_up(1234567))
print(to_currency_up(123456789012))
