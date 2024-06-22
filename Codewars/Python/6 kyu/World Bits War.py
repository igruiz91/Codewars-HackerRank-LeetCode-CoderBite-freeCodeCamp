def bits_war(numbers):
    odds, evens = [], []
    for n in numbers:
        if n%2:
            odds.append(sum_bits(bin(n)))
        else: evens.append(sum_bits(bin(n)))
    if sum(odds) == sum(evens): return "tie"
    return "odds win" if sum(odds) > sum(evens) else "evens win"


def sum_bits(n):
    [symb, value] = n.split("b")
    count = list(value).count("1")
    return count * -1 if symb[0]=="-" else count




print(bits_war([1, 5, 12]))
print(bits_war([7, -3, 20]))
print(bits_war([7, -3, -2, 6]))
