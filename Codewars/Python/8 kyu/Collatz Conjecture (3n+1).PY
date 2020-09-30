def hotpo(n):
    count=0
    if n == 1:
        return count
    if n%2==0:
        count+=hotpo(n/2)+1 
    else: 
        count+= hotpo(3*n+1)+1
    return count

def hotpoUp(n):
    count=0
    while n!=1:
        n= 3*n+1 if n%2 else n/2
        count+=1
    return count

def hotpoUp2(n, count=0):
    return count if n==1 else hotpoUp2(n/2 if n%2==0 else n*3+1, count+1)

print(hotpo(6))
print(hotpoUp(6))
print(hotpoUp2(6))