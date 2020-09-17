def clock_degree(s) :
    hour= s.split(':')
    hour = [int(hour[0])*30, int(hour[1])*6]
    return hour



print(clock_degree("01:01"))