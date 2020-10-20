menu = {
    "burger": " Burger ",
    "fries": " Fries ",
    "chicken": " Chicken ",
    "pizza": " Pizza ",
    "sandwich": " Sandwich ",
    "onionring": " Onionrings ",
    "milkshake": " Milkshake ",
    "coke": "Coke",
}


def get_order(order):
    resp = ""
    for e in menu:
        count = order.split(e)
        resp += menu.get(e)*(len(count)-1)
        order = "".join(count)
    return " ".join(resp.split())


def get_order_up(order):
    clean_order =""
    menu = ['burger', 'fries', 'chicken', 'pizza',
            'sandwich', 'onionrings', 'milkshake', 'coke']
    for i in menu:
      clean_order += (i.capitalize()+" ") *order.count(i)
    return clean_order[:-1]


print(get_order('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'))
print(get_order_up('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'))
