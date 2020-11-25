def nba_extrap(ppg, mpg):
    return round(48/mpg*ppg, 2)

print(nba_extrap(12, 20))