def capitalize(s):
    even, odd= [], []
    s=s.lower()
    print(s)
    for i in range(len(s)):
        if i%2==0:
            odd.append(s[i].upper())
            even.append(s[i])
        else:
            odd.append(s[i])
            even.append(s[i].upper())
    return [''.join(odd), ''.join(even)]

def capitalize_up(s):
    s= ''.join(c if i%2 else c.upper() for i,c in enumerate(s))
    return [s, s.swapcase()]

def capitalize_up2(s):
    result=['','']
    for i,c in enumerate(s):
        result[0]+= c.lower() if i%2 else c.upper()
    result[1]=result[0].swapcase()
    return result

print(capitalize('abcdef'))
print(capitalize_up('abcdef'))
print(capitalize_up2('abcdef'))