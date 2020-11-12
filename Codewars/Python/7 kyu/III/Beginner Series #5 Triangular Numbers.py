def is_triangular(t):
    count = 1
    n=1
    while(n<t):
        n = count*(count+1)/2
        count+=1
    return n==t

def is_triangular_up(t):
    return (8*t+1)**0.5%1==0 

print(is_triangular(6))
print(is_triangular_up(6))