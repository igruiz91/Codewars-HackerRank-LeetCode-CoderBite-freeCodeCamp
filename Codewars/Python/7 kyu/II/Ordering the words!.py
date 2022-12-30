def order_word(s):
    return "".join(sorted(list(s))) if s != "" else 'Invalid String!'


print(order_word("Hello, World!"))
print(order_word(""))
