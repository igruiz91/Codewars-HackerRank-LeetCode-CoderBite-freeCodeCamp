class Solution:

  def distinctPrimeFactors(nums):
    resp = set()
    for n in nums:
      i = 2
      while i*i<=n:
        while n%i==0:
          n//=i
          resp.add(i)
        i+=1
      if n>1:
        resp.add(n)
    return resp









# print(find_factors(10))
# print(find_factors(1024))
#
#

print(Solution.distinctPrimeFactors([2,4,3,7,10,6]))
