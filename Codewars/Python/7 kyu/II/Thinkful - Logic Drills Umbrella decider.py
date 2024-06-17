import math


def take_umbrella(w, r):
    r = math.floor(r * 10) / 10
    return (r > 0.20 and w == "cloudy") or (r > 0.40 and w == "sunny") or w == "rainy"


print(take_umbrella("sunny", 0.40))
print(take_umbrella("rainy", 0.0))
print(take_umbrella("cloudy", 0.20))
print(take_umbrella("sunny", 0.4893769393656172))
