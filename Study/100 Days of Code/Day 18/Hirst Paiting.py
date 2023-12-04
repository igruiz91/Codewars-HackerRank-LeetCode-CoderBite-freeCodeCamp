#import colorgram
from turtle import Turtle, Screen, colormode
import random


rgb_colors = [(242, 243, 246), (243, 240, 233), (245, 240, 244), (239, 243, 241), (197, 159, 115), (70, 91, 127), (146, 86, 55), (217, 209, 118), (136, 159, 192), (28, 32, 47), (177, 160, 40), (57, 33, 23), (184, 145, 163), (122, 71, 93), (137, 174, 153), (77, 115, 78), (61, 30, 40), (140, 27, 17), (185, 99, 84), (117, 29, 41), (48, 58, 93), (100, 119, 170), (34, 50, 44), (176, 98, 115), (100, 157, 86), (215, 174, 191), (66, 84, 26), (217, 180, 172), (160, 210, 190), (219, 206, 9)]

t = Turtle()
colormode(255)
t.speed(0)


# def extract_colors():
#   colors = colorgram.extract("image.jpg", 30)
#   for color in colors:
#       red = color.rgb.r
#       green = color.rgb.g
#       blue = color.rgb.b
#       rgb =(red, green, blue)
#       rgb_colors.append(rgb)

def paint_dot():
  color = random.choice(rgb_colors)
  t.dot(20,color)


def move_turtle(x, y):
  x_start = x
  y_start = y
  gaps_right = abs(x/10)
  gaps_up = abs(y/10)
  for _ in range(19):
    t.teleport(x,y_start)
    y+= gaps_up
    for _ in range(21):
      t.teleport(x,y)
      x+= gaps_right
      paint_dot()
    x=x_start



x= -500
y = -500


def make_paint():
  t.teleport(x, y)
  move_turtle(x,y)



make_paint()
#paint_dot()


screen = Screen()
screen.screensize(300)
screen.exitonclick()

