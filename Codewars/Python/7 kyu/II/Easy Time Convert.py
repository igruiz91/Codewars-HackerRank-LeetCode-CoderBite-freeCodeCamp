def time_convert(num):
  if num<=0: return "00:00"
  h, m = "0"+str(num//60), "0"+str(num % 60)
  return f"{h[-2:] if len(h)<4 else h[1:]}:{m[-2:]}"



def time_convert_up(num):
  return '{:02d}:{:02d}'.format(*divmod(max(int(num) ,0),60))

print(time_convert(78))
print(time_convert_up(78))
print(time_convert(565757))
print(time_convert_up(565757))
