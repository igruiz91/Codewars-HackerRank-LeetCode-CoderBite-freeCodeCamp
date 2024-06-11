def add(a):
    def inner(b):
        return a + b
    return inner

class add_up(int):
    def __call__(self, value):
        return add_up(self + value)




print(add(4)(5))
print(add_up(4)(5))
