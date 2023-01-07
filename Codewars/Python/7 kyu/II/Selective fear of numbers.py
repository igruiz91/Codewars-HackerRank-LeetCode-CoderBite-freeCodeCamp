def am_I_afraid(day, num):
  if day == "Monday" and num ==12: return True
  if day == "Tuesday" and num >95: return True
  if day == "Wednesday" and num ==34: return True
  if day == "Thursday" and num ==0: return True
  if day == "Friday" and num %2==0: return True
  if day == "Saturday" and num==56: return True
  if day == "Sunday" and abs(num)==666: return True
  return False

def am_I_afraid_up(day, num):
  return {"Monday": num == 12, "Tuesday" : num >95,
          "Wednesday": num == 34,
          "Thursday":  num == 0,
          "Friday": num %2 == 0,
          "Saturday": num == 56,
          "Sunday": abs(num) == 666,}[day]


# print(am_I_afraid("Monday", 13))
print(am_I_afraid("Sunday", -666))
print(am_I_afraid_up("Sunday", -666))
# print(am_I_afraid("Tuesday", 965))
