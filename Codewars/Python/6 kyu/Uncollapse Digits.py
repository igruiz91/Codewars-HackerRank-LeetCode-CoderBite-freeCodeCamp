import re

def uncollapse(digits):
  nums = re.findall(r"(zero|one|two|three|four|five|six|seven|eight|nine)", digits)
  return " ".join(nums)

digits = ["zero","one","two","three","four","five","six","seven","eight","nine"]
def uncollapseUp(str):
  for d in digits:
    str = str.replace(d, f"{d} ")
  return str.strip()

def uncollapseSlidingWindows(str):
  res = ""
  start = 0
  nums = {'zero','one','two','three','four','five','six','seven','eight','nine','ten'}
  for end in range(1, len(str)+1):
    if str[start:end] in nums:
      res+=f" {str[start:end]}"
      start = end
  return res.strip()


print(uncollapse("three"))
print(uncollapseUp("eightsix"))
print(uncollapseSlidingWindows("eightsix"))


