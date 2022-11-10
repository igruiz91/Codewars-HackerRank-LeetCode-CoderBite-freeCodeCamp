def determine_time(arr):
  time = [0,0,0]
  for a in arr:
    temp = [int(x) for x in a.split(':')]
    h = time[0]+temp[0]+(1 if time[1]+temp[1] > 59 else 0)
    m = ((time[1]+temp[1])%60 if time[1]+temp[1] > 59 else time[1]+temp[1])+(1 if time[2]+temp[2] > 59 else 0)
    s = ((time[2]+temp[2])% 60 if time[2]+temp[2] >59 else time[2]+temp[2])
    time[0] = h
    time[1] = m
    time[2] = s
  recheck = time[0]*60 + time[1] + time[2]/60
  return recheck <= 1440


def determine_time_up(arr):
  total = 0
  for time in arr:
    h,m,s = map(int, time.split(':'))
    total += h*60*60 + m*60 +s
  return total<=24*60*60


print(determine_time(["12:00:00", "12:00:00"]))
print(determine_time_up(["12:00:00", "12:00:00"]))
print(determine_time(["01:10:01", "02:30:59"]))
print(determine_time_up(["01:10:01", "02:30:59"]))
