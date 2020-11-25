import math
def dating_range(age):
    min = math.floor(age/2)+7 if age>14 else math.floor(age-0.1*age)
    max = math.floor((age-7)*2) if age > 14 else math.ceil(age+0.10*age)
    return str(min)+ "-"+str(max)

print(dating_range(10))