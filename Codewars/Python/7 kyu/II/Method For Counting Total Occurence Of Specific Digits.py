class List(object):
    @staticmethod
    def count_spec_digits(integers_list, digits_list):
        return [(n, integers_list.count(n)) for n in digits_list if integers_list]




integers_list =  [1, 1, 2, 3 , 1 , 2 , 3 , 4]
digits_list = [1, 3]
integers_list2 = [-18, -31, 81, -19, 111, -888]
digits_list2 = [1, 8, 4]
a = List.count_spec_digits(integers_list, digits_list)
b = List.count_spec_digits(integers_list2, digits_list2)

print(a)
print(b)
