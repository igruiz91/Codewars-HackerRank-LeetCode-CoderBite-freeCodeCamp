import math
def halving_sum(n):
    sum=n 
    while n>=1:
        n=n/2
        sum+=math.floor(n)
    return sum

def halving_sum_up(n):
    if n==1:
        return 1
    else:
        return n+halving_sum(n//2)

def halving_sum_up2(n):
    s=0
    while n:
        s+=n
        n>>=1
    return s


print(halving_sum(25))
print(halving_sum_up(25))
print(halving_sum_up2(25))