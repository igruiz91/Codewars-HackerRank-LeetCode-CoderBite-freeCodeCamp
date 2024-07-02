from turtle import Turtle, Screen, colormode
import random

t = Turtle()
t.speed(0)
colormode(255)

def random_color():
  red = random.randint(0, 255)
  green = random.randint(0, 255)
  blue = random.randint(0, 255)
  return (red, green, blue)


def draw_spirograph(gap):
  for _ in range(int(360/gap)):
    t.color(random_color())
    t.circle(100)
    t.setheading(t.heading()+gap)

draw_spirograph(3)



screen = Screen()
screen.screensize(500)
screen.exitonclick()
