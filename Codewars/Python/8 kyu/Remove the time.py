def shorten_to_date(long_date):
    return long_date.split(',')[0]


def shorten_to_date_up(long_date):
    return long_date[:long_date.index(',')]  # rfind


print(shorten_to_date("Monday February 2, 8pm"))
print(shorten_to_date_up("Monday February 2, 8pm"))
