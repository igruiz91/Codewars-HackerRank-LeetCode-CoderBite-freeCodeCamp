def change_me(money):
    changes = {"£5": "20p "*25, "£2": "20p "*10, "£1": "20p "*5, "50p": "20p 20p 10p", "20p": "10p 10p"}
    return changes[money].strip() if money in changes else money

print(change_me("£5"))
