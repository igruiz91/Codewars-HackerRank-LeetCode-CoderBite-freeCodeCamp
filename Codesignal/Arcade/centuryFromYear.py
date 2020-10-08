def centuryFromYear(year):
    if year%100==0:
        return int(year/100)
    return int(year/100)+1

print(centuryFromYear(1901))