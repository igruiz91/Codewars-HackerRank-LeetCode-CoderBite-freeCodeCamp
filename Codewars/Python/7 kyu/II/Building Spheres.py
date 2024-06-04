import math
class Sphere(object):
    def __init__(self, radius, mass) -> None:
        self.radius = radius
        self.mass = mass

    def get_radius(self):
        return self.radius
    def get_mass(self):
        return self.mass
    def get_volume(self):
        return round(4/3 *math.pi * pow(self.radius,3),5)
    def get_surface_area(self):
        return round(math.pi*4*pow(self.radius,2),5)
    def get_density(self):
        return round (self.mass / self.get_volume(), 5)


ball = Sphere(2,50)

print(ball.get_mass())
print(ball.get_volume())
print(ball.get_surface_area())
print(ball.get_density())
