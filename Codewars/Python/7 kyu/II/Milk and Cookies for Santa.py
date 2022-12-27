from datetime import date


def time_for_milk_and_cookies(dt):
    return str(dt)[-5:] == "12-24"


def time_for_milk_and_cookies_up(dt):
  return dt.month == 12 and dt.day == 24

def time_for_milk_and_cookies_up_two(dt):
  return dt.month * dt.day == 288

print(time_for_milk_and_cookies(date(2013, 12, 24)))
print(time_for_milk_and_cookies_up(date(2013, 12, 24)))
print(time_for_milk_and_cookies_up_two(date(2013, 12, 24)))
