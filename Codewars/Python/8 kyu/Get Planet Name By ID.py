def get_planet_name(id):
    switcher={
        1:"Mercury",
        2:"Venus",
        3:"Earth",
        4:"Mars",
        5:"Jupiter",
        6:"Saturn",
        7:"Uranus",  
        8:"Neptune"
    }
    return switcher.get(id)

def get_planet_name_Up(id):
    return {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
    }.get(id,None)

print(get_planet_name(1))
print(get_planet_name(2))