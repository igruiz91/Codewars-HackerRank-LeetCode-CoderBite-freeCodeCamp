def two_oldest_ages(ages):
    arr1 = sorted(ages)[len(ages)-1]
    arr2 = sorted(ages)[len(ages)-2]
    return [arr2, arr1]

def two_oldest_ages_up(ages):
    return sorted(ages)[-2:]

def two_oldest_ages_up2(ages):
    ages.sort()
    s = [ages[-2], ages[-1]]
    return s





print(two_oldest_ages([1, 5, 87, 45, 8, 8]))
print(two_oldest_ages_up([1, 5, 87, 45, 8, 8]))
print(two_oldest_ages_up2([1, 5, 87, 45, 8, 8]))