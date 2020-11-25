def year_days(year):
  days=365
  if ((year % 4 == 0 and year % 100 !=0) or (year % 400 == 0)):
    days+=1
  #return ("{} has {} days").format(year, days)
  return "%d has %d days" % (year, days) 




print(year_days(1991))
print(year_days(0))
print(year_days(2000))
print(year_days(-300))
