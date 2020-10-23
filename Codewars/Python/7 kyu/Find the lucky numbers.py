def filter_lucky(lst):
  resp=[]
  for n in lst:
    if str(n).count('7')>0:
      resp.append(n)
  return resp


def filter_lucky_up(lst):
  return [i for i in lst if '7' in str(i)]


#using find
def filter_lucky_up_2(lst):
  return [i for i in lst if str(i).find('7') != -1]

print(filter_lucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]))
print(filter_lucky_up([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]))
print(filter_lucky_up_2([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]))
