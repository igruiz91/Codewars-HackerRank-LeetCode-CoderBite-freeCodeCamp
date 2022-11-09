def fillable(stock, merch, n):
  if merch not in stock: return False
  return True if stock[merch]>= n else False


def fillable_up(stock, merch, n):
  return stock.get(merch,0)>= n

def fillable_up_two(stock, merch, n):
  return merch in stock and stock[merch]>= n

stock = { 'football': 4,
          'boardgame': 10,
          'leggos': 1,
          'doll': 5 }

print(fillable(stock, 'football', 3))
print(fillable(stock, 'a', 3))
print(fillable(stock, 'doll', 13))
print('--------------------------------------------------------')
print(fillable_up(stock, 'football', 3))
print(fillable_up(stock, 'a', 3))
print(fillable_up(stock, 'doll', 13))
print('--------------------------------------------------------')
print(fillable_up_two(stock, 'football', 3))
print(fillable_up_two(stock, 'a', 3))
print(fillable_up_two(stock, 'doll', 13))
