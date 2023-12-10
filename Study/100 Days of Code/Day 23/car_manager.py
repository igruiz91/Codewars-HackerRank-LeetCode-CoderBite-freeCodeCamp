from turtle import Turtle
import random


COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
STARTING_MOVE_DISTANCE = 5
MOVE_INCREMENT = 2

class CarManager():
    def __init__(self):
      self.car_list = []
      self.move_speed=STARTING_MOVE_DISTANCE
      self.move_cars()

    def new_car(self):
      if random.randint(1,7) == 1:
        new_car = Turtle()
        new_car.shape("square")
        new_car.shapesize(stretch_wid=1, stretch_len=2)
        new_car.penup()
        new_car.goto(300, random.randint(-230, 230))
        new_car.color(random.choice(COLORS))
        self.car_list.append(new_car)


    def level_up(self):
      self.move_speed += MOVE_INCREMENT

    def move_cars(self):
      for car in self.car_list:
        car.backward(self.move_speed)
        if car.xcor()<-280:
          car.goto(295,car.ycor())

