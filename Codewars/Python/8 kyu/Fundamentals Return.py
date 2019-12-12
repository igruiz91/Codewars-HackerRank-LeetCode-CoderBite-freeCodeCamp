def add(a,b):
    switcher = {
        'add': a+b,
        'multiply': a*b,
        'divide': a/b,
        'mod': a%b,
        'exponent': 1, 
        'subt':a-b,
    }
    return switchet.get