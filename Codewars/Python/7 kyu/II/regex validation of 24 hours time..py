import re
def validate_time(time):
    return bool(re.match( r'^([01]?\d|2[0-3]):[0-5]\d$', time))



print(validate_time("1:00"))
print(validate_time("11:1"))
print(validate_time("12:60"))
print(validate_time("24:00"))
print(validate_time("21:00"))
print(validate_time("25:00"))
