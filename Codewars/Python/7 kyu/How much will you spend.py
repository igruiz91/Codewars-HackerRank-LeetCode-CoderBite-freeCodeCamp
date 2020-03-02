def getTotal(costs, items, tax):
    sum = 0
    for e in items:
        if(costs.get(e)): sum+= costs[e]
        else: pass
    return round(sum*tax+sum,2)


costs = {'socks':5, 'shoes':60, 'sweater':30}


def getTotalUp(costs, items, tax):
    return round(sum(costs.get(e, 0)for e in items) * (1+tax),2)


print(getTotal(costs, ['socks', 'shirt'], 0.09))
print(getTotalUp(costs, ['socks', 'shirt'], 0.09))