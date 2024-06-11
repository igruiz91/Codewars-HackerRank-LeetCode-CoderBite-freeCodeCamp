def all_nines(x):
    if x%2 == 0 or x%5==0: return -1
    max = float("inf")
    i=9
    count = 1
    while i<max:
        if i%x==0 : return i//x
        i+=(10**count)*9
        count+=1
    return -1

def all_nines_up(x):
    if x % 2 == 0 or x % 5 == 0:
        return -1
    n=9
    while n%x!=0:
        n=n*10+9
    return n//x


for i in range(10,100):
    print(i)
    print(all_nines(i))
    print(all_nines_up(i))
