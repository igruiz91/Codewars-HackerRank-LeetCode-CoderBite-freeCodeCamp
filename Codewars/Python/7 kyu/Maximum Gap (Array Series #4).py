def max_gap(numbers):
    resp = 0
    numbers = sorted(numbers)
    for i in range(len(numbers)-1):
        print(numbers(i))

print(max_gap([13,10,2,9,5]))
