import math


def riders(stations):
    count = 1
    acc = 0
    for x in stations:
        if acc+x <= 100:
            acc += x
        else:
            acc = x
            count += 1
    return count


print(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]))
print(riders([12, 9, 49, 46, 30, 48, 46, 36]))
