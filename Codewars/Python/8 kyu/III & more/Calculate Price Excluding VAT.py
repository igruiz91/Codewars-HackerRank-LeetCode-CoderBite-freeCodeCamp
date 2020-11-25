def excluding_vat_price(price):
    if(price): return round(price/(1+0.15), 2)
    return -1

print(excluding_vat_price(123))