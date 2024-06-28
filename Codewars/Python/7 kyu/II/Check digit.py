def check_digit(number, index1, index2, digit):
    i1=min(index1, index2)
    i2=max(index1, index2)
    print(i1, i2)
    l = list(f"{number}")[i1:i2]
    print(l)
    return str(digit) in list(f"{number}")[i1:i2]






print(check_digit(67845123654, 4, 2, 4))
print(check_digit(1234567, 0, 1, 2))
