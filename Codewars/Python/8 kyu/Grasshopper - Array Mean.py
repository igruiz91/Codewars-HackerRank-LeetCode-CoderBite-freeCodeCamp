def find_average(nums):
    if len(nums) <= 0: return 0
    suma=0.0
    for n in nums:
        suma =suma+n
    return suma/len(nums)


def find_averageUp(nums):
    return float(sum(nums))/len(nums) if len(nums) !=0 else 0

print(find_averageUp([1,2]))