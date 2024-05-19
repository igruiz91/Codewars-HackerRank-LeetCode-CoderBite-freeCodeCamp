a = [1,2,3]
b = {1,2}
c = 3
d={x: x*x for x in range(1,100)}
# print(d)

string = "baaabcaccccc"

str_to_obj = {char: string.count(char) for char in string}

ordered_obj= {k:v for k,v in sorted(str_to_obj.items(), key = lambda val:val[1], reverse=True)}


new_str = "".join(k*v for k,v in ordered_obj.items())

print(str_to_obj)
print(ordered_obj)
print(new_str)
