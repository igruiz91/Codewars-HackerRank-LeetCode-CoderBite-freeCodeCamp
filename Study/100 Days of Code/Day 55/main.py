#@make_bold decorator
def make_bold(function):
    def wrapped_function():
        return f"<b>{function()}</b>"
    return wrapped_function


@make_bold
def bye():
    return "Bye!"


print(bye())


# TODO: Create the logging_decorator() function 👇
def logging_decorator(function):
    def wrapper(*args):
        print(f"You called {function.__name__}{args}")
        resp = function(args[0], args[1], args[2])
        print(f"It returned: {resp}")

    return wrapper


# TODO: Use the decorator 👇
@logging_decorator
def a_function(a, b, c):
    return a * b * c


inputs= [1,2,3]

print(a_function(inputs[0], inputs[1], inputs[2]))
