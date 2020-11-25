from math import ceil

def calculate_tip(amount, rating):
    rating = rating.lower()
    resp=0
    if rating == "terrible":
        resp= 0 
    elif rating == "poor":
        resp= amount*0.05
    elif rating == "good":
        resp= amount*0.10
    elif rating == "great":
        resp = amount*0.15
    elif rating == "excellent":
        resp= amount*0.20
    else:
        return "Rating not recognised"
    return ceil(resp)


def calculate_tip_up(amount, rating):
    tips={'terrible': 0, 'poor' : .05, 'good' : .1, 'great' : .15, 'excellent' : .2}
    if rating.lower() in tips:
        return ceil(amount*tips[rating.lower()])
    else:
        return 'Rating not recognised'

print(calculate_tip(20, "Excellent"))
print(calculate_tip_up(25, "Excellent"))