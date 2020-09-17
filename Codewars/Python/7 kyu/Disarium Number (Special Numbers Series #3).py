def disarium_number(number):
    sum=0
    count=0
    num = list(str(number))
    for element in num:
        count+=1
        pow = int(element)
        sum+=pow**count
    return "Disarium !!" if sum== number else "Not !!"

def disarium_number_up(n):
    return "Disarium !!" if n==sum(int(d)**i for i,d in enumerate(str(n),1)) else "Not !!"


print(disarium_number(89))
print(disarium_number_up(19))