import random

names_string = "Angela, Ben, Jenny, Michael, Cloe"


names = names_string.split(', ')
rand = random.randint(0, len(names)-1)

print(f'{names[rand]} is going to buy the meal today!')
