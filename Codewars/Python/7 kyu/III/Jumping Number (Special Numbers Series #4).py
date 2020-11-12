def jumping_number(number):
    if number<10: return "Jumping!!"
    number = list(map(int, str(number)))
    for i in range(len(number)-1):
        if number[i+1]+1 == number[i] or number[i+1]-1 ==number[i]:
            pass
        else: return "Not!!"
    return "Jumping!!"

def jumping_number_up(number):
    arr = list(map(int, str(number)))
    return ('Not!!', 'Jumping!!')[all(map(lambda a,b: abs(a-b)==1, arr, arr[1:] ))]

print(jumping_number(97))
print(jumping_number_up(78))