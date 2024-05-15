def alan(arr):
    stops = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway",]
    return "Smell my cheese you mother!" if all(stop in arr for stop in stops) else "No, seriously, run. You will miss it."



print(alan(["Norwich", "Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway", "London"]))



def alan_up(arr):
    stops = {'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'}
    return  "Smell my cheese you mother!" if stops.issubset(arr) else "No, seriously, run. You will miss it."
