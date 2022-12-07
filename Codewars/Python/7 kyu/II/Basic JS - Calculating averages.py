class Calculator:
    @staticmethod
    def average(*args):
        return sum(args)/args.__len__() if args.__len__() > 0 else 0


a = Calculator
print(a.average(1, 2, 3))


