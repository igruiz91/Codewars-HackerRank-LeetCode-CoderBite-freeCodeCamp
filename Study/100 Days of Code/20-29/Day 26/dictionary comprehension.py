temp_c = {"Monday": 12, "Tuesday": 14, "Wednesday": 15, "Thursday": 14, "Friday": 21, "Saturday": 22, "Sunday": 24}



def to_fahrenheit(temp):
  return (temp*9/5)+32


temp_f = {day: to_fahrenheit(temp) for (day,temp) in temp_c.items()}


print(temp_f)
