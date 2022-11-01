class Cube(object):
    # This cube needs help
    def __init__(self, side=0):
        self.__side = abs(side)

    def get_side(self):
        return self.__side

    def set_side(self, new_side):
        self.__side = abs(new_side)

c = Cube()
print(c.get_side())
