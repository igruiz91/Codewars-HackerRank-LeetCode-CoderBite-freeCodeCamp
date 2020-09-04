def shifted_diff(first, second):
    l = len(first)
    if(l != len(second)): return -1
    while(first!=second and l > -1):
        first = first[-1]+first[:-1]
        l-=1
    return -1 if l==-1 else abs(l-len(second))

def shifted_diff_up(first, second):
    return (second+second).find(first) if len(first)==len(second) else -1
    
    #eecoff
#coffeecoffee

print(shifted_diff("eecoff","coffee"))
print(shifted_diff_up("eecoff","coffee"))