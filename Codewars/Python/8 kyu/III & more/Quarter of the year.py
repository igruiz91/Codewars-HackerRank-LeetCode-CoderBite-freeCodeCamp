import math


def quarter_of(month):
    if month >= 10:
        return 4
    if month >= 7:
        return 3
    if month >= 3:
        return 2
    if month >= 0:
        return 1


def quarter_of_up(month):
    return math.ceil(month/3)


print(quarter_of(1))
print(quarter_of(11))
