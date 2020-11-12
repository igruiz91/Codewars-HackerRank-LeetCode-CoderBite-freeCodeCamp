def automorphic(n):
    square = str(n*n)
    convertedN = len(str(n))
    return 'Automorphic' if square[-convertedN::]==str(n) else 'Not!!'

def automorphic_up(n):
    return 'Automorphic' if str(n*n).endswith(str(n)) else 'Not!!'

print(automorphic(36))
print(automorphic_up(6))
