class List:
    def remove_(self, integer_list, values_list):
        return [x for x in integer_list if x not in values_list]


arr = List()


integer_list = [1, 1, 2, 3, 1, 2, 3, 4]
values_list = [1, 3]


print(arr.remove_(integer_list, values_list))
