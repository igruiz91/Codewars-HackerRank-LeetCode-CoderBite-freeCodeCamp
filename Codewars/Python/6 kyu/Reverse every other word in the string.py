def reverse_alternate(string):
    resultado=[]
    for i, palabra in enumerate(string.split()):
        if i % 2:
            resultado.append(palabra[::-1])
        else:
            resultado.append(palabra)
    return " ".join(resultado)

def reverse_alternate_up(string):
    return " ".join(y[::-1] if x%2 else y for x,y in enumerate(string.split()))

def reverse_alternate_up2(string):
    string = string.split()
    for x in range(0, (len(string))):
        if x%2:
            string[x] = (string[x])[::-1]
    return ' '.join(string)


print(reverse_alternate("Did it work?"))
print(reverse_alternate_up("Did it work?"))
print(reverse_alternate_up2("Did it a mi work?"))