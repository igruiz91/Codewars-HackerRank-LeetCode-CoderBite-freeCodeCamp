from turtle import Turtle, Screen




t = Turtle()

for i in range(10):
  t.pd()
  t.forward(20)
  t.pu()
  t.forward(20)


screen = Screen()

screen.screensize(300)
screen.exitonclick()

