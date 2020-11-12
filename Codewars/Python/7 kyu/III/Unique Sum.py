def unique_sum(lst):
    return None if len(lst)==0 else sum(set(lst))

def unique_sum_up(lst):
    if(lst): return sum(set(lst))

print(unique_sum([1,3,8,1,8]))
print(unique_sum_up([1,3,8,1,8]))