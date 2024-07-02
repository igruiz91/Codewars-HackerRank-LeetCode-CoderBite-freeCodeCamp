from turtle import Turtle, Screen
import random


colors = ["AliceBlue", "chocolate", "DarkGrey", "Red", "Green", "coral", "gold", "lavender", "ivory", "LightGray"]

t = Turtle()


for i in range(3,10):
  angle = 360/i
  t.pencolor(random.choice(colors))
  for j in range(i):
    t.forward(100)
    t.right(angle)










screen = Screen()
screen.screensize(300)
screen.exitonclick()
