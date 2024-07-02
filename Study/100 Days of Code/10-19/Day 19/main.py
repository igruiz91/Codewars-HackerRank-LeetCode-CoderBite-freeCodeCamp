from turtle import Turtle, Screen

tim = Turtle()
screen = Screen()


def move_forwards():
    tim.forward(10)

def move_backwards():
    tim.back(10)

def move_clockwise():
  heading = tim.heading()-10
  tim.setheading(heading)

def move_counter_clockwise():
  heading = tim.heading()+10
  tim.setheading(heading)

def clear_screen():
  tim.clear()
  tim.penup()
  tim.home()
  tim.pendown()

screen.listen()
screen.onkey(key="w", fun=move_forwards)
screen.onkey(key="s", fun=move_backwards)
screen.onkey(key="a", fun=move_clockwise)
screen.onkey(key="d", fun=move_counter_clockwise)
screen.onkey(key="c", fun=clear_screen)
screen.exitonclick()
