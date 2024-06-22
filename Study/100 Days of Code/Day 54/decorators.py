import time

current_time = time.time()
print(current_time)  # seconds since Jan 1st, 1970

# Write your code below 👇


def speed_calc_decorator(function):
    def wrapper_function():
        start = time.time()
        function()
        end = time.time()
        print(function.__name__)
        print(f"start:{start}, end:{end}")
        print(f"time:{end-start}")
    return wrapper_function


@speed_calc_decorator
def fast_function():
    for i in range(10000):
        for j in range(10000):
            i*j


@speed_calc_decorator
def slow_function():
    for i in range(10000000):
        i * i


fast_function()
slow_function()
