from turtle import Turtle, Screen, colormode
import random




t = Turtle()
colormode(255)
t.pensize(15)
t.speed(10)


#colors = ["CornflowerBlue", "DarkOrchid", "IndianRed", "DeepSkyBlue", "LightSeaGreen", "wheat", "SlateGray", "SeaGreen"]
def random_color():
  red = random.randint(0, 255)
  green = random.randint(0, 255)
  blue = random.randint(0, 255)
  return (red, green, blue)


angles = [0,90, 180, 270 ]

for i in range(100):
  t.pencolor(random_color())
  t.forward(30)
  t.left(random.choice(angles))




screen = Screen()
screen.screensize(300)
screen.exitonclick()
