def arithmetic_sequence_elements(a, r, n):
    resp=[]
    resp.append(str(a))
    while n>1:
        a+=r
        resp.append(str(a))
        n-=1
    return ", ".join(resp)

def arithmetic_sequence_elements_up(a, r, n):
    return ', '.join(str(a + b * r) for b in range(n))

print(arithmetic_sequence_elements(1, 2, 5))
print(arithmetic_sequence_elements_up(1, 2, 5))