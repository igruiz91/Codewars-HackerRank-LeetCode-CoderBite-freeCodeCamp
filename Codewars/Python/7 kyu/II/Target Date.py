def date_nb_days(a0, a, p):
  years = 0
  days = 0
  while(a0<a):
    a0 += a0*(p*1/ 100)
    years += 1
  return years


print(date_nb_days(4281, 5087, 2))
