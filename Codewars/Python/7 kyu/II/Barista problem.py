def barista(coffees):
    coffees.sort()
    res = 0
    for c in coffees:
        res += res+c
    return res+(len(coffees)-1)*2


print(barista([4, 3, 2]))
