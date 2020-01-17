def what_time_is_it(angle):
    return str(round(angle/30))+":"+angle%30

print(what_time_is_it(360))