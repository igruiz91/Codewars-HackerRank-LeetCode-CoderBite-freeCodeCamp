CHANGE = {"penny": 0.01,
"nickel": 0.05,
"dime": 0.10,
"quarter": 0.25,
"dollar": 1.00}


def change_count(change):
    change = change.split()
    resp = 0
    for c in change:
        resp+= CHANGE[c]
    return f"${format(resp, ".2f")}"


def change_count_up(change):
    return f"${sum(CHANGE[c] for c in change.split()):.2f}"

def change_count_up_two(change):
    return "$%.2f" %  sum(CHANGE[c] for c in change.split())



print(change_count('quarter quarter'))
print(change_count_up('quarter quarter'))
print(change_count_up_two('quarter quarter'))
print(change_count('dime penny dollar'))
print(change_count_up('dime penny dollar'))
print(change_count_up_two('dime penny dollar'))
