def to_currency(price):
  p =  price.to_currency()
  return p


print(to_currency(123456))
print(to_currency(123456789012))
