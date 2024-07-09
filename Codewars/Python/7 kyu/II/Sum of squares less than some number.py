def get_number_of_squares(n):
    count = 1
    while n > 0:
        n -= count * count
        count += 1
    return count - 2


def get_number_of_squares_up(n):
    s,i = 0 ,0
    while s<n:
        i+=1
        s+=i**2
    return i-1
