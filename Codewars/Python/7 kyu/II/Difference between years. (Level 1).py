def how_many_years(date1, date2):
  date1= date1.split('/')[0]
  date2= date2.split('/')[0]
  return abs(int(date1)-int(date2))




print(how_many_years('1997/10/10', '2015/10/10'))
