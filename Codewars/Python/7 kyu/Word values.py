def name_value(my_list):
    resp = []
    for i in range(1, len(my_list)+1):
        sum=0
        for c in my_list[i-1]:
            if not c == ' ':
                sum+=(ord(c)-96)*i
        resp.append(sum)
    return resp


def name_value_up(my_list):
    return [i*sum(map(lambda c: [0, ord(c)-96][c.isalpha()], w.lower())) for i,w in enumerate(my_list, 1)]



print(name_value(['aaa', 'ab c']))
print(name_value_up(['aaa', 'ab c']))
