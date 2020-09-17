def define_suit(card):
    if(card[-1]=="C"): return 'clubs'
    if(card[-1]=="D"): return 'diamonds'
    if(card[-1]=="H"): return 'hearts'
    if(card[-1]=="S"): return 'spades'


def define_suit_up(card):
    c = {'C': 'clubs', 'S':'spades', 'D':'diamonds','H':'hearts'}
    return c[card[-1]]
print(define_suit('3C'))