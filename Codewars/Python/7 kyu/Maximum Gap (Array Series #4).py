def max_gap(numbers):
    resp = 0
    numbers = sorted(numbers)
    for i in range(len(numbers)-1):
        diferencia = numbers[i+1]-numbers[i]
        if(diferencia > resp): 
            resp = diferencia
    return resp

def max_gap_up(numbers):
    numbers=sorted(numbers)
    return max(b-a for a,b in zip(numbers, numbers[1:]))

def max_gap_up2(numbers):
    n = sorted(numbers)
    return max([abs(n[i] - n[i+1]) for i in range(len(n)-1)])

print(max_gap([13,10,2,9,5]))
print(max_gap_up([13,10,2,9,5]))
print(max_gap_up2([13,10,2,9,5]))
