from math import log


def powerof4(n):
    if type(n).__name__ != "int": return False
    a=1
    while True:
        if a==n: return True
        a*=4
        if a>n: return False



def powerof4_up(n):
    return type(n)==int and n>=0 and log(n, 4).is_integer()




print(powerof4(64))
print(powerof4(1))
print(powerof4(256))
