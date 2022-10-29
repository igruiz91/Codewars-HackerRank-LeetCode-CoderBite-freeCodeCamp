def compute_depth(n):
  nums = {""}
  for i in range(1,99):
    temp = [z for z in str(n*i)[::]]
    nums.update(temp)
    if len(nums) == 11: return i


def compute_depth_up(n):
  i=0
  digits = set()
  while len(digits)<10:
    i+=1
    digits.update(str(i*n))
  return i



print(compute_depth(1))
print(compute_depth_up(1))
print(compute_depth(42))
print(compute_depth_up(42))
