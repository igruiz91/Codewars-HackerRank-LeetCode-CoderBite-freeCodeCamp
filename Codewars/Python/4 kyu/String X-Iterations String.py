def string_func(s,x):
    contador = 0
    while(contador<x):
        first = s[slice(contador)]
        second = str(s[slice(contador-len(s))])
        txt = first + str(reversed(second))
        contador+=1
        s = txt
    return list(str(s))
    
        

print(string_func("String", 3))