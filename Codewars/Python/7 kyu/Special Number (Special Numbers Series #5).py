def special_number(number):
    number=list(str(number))
    for i in number:
        if(int(i)>5):
            return "NOT!!"
    return "Special!!"

SPECIAL = set('012345')

def special_number_up(number):
    return "Special!!" if set(str(number)) <= SPECIAL else "NOT!!"

def special_number_up2(number):
    return  "Special!!" if max(str(number)) <="5" else "NOT!!" 

print(special_number(16))
print(special_number_up(15))
print(special_number_up2(15))
