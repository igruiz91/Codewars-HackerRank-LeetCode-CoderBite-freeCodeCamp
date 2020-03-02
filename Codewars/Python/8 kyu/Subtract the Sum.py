def subtract_sum(number):
    fruits = ['kiwi','pear','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple','cucumber','pineapple','cucumber','orange','grape','orange','grape','apple','grape','cherry','pear','cherry','pear']
    reduccion = number - sum_digits(str(number))
    if(reduccion>len(fruits)):
        return subtract_sum(reduccion)
    return fruits[reduccion-1]

def sum_digits(n):
    sum=0
    for e in n:
        sum+=int(e)
    return sum

def subtract_sum_up(number):
    return 'apple'

print(subtract_sum(10))
print(subtract_sum_up(11))
# print(sum_digits("123"))