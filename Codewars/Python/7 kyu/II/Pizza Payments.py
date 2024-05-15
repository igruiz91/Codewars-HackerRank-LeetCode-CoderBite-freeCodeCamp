def michael_pays(cost):
    if(cost<5): return round(cost,2)
    kate = cost*1/3
    if(kate>10): return cost-10
    return round(cost-kate,2)


def michael_pays_up(cost):
  return round(cost if cost < 5 else max(cost*2/3, cost-10 ),2)

print(michael_pays(22))
print(michael_pays(4.325))
