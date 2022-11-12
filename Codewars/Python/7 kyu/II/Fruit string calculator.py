import re
def calculate(string):
  pattern = r"\d+"
  nums = [int(n) for n in re.findall(pattern, string)]
  return sum(nums) if "gains" in string else nums[0]-nums[1]


print(calculate("Panda has 48 apples and loses 4"))
