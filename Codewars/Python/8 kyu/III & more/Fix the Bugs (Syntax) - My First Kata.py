def my_first_kata(a,b):
    if (type(a) != int or type(b) !=int):
        return False
    else:
        return a % b + b % a

def my_first_kata_up(a,b):
    if type(a)==int and type(b)==int:
        return a%b + b%a
    return False


print(my_first_kata(3,5))