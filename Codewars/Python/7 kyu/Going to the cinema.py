import math
def movie(card, ticket, perc):
    planB = card+ticket*perc
    cont=1
    while math.ceil(planB)>ticket*cont:
        planB+= ticket*perc**cont*perc
        cont+=1
    return cont

print(movie(500, 15, 0.9))