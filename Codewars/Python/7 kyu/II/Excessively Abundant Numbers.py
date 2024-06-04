def abundant_number(num):
    ans = []
    for i in range(1, num//2+1):
        if num%i == 0: ans.append(i)
    return sum(ans)>num


def abundant_number_up(num):
    return sum(i for i in range(1, num//2+1) if not num%i)>0

print(abundant_number(12))
print(abundant_number_up(12))
