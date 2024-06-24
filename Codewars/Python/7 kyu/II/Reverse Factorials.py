def reverse_factorial(num):
    fact, count=1, 1
    while fact<num:
        fact*=count
        count+=1
        print(count, fact)
    return f"{count-1}!" if fact==num else "None"

print(reverse_factorial(120))

