from turtle import Turtle, Screen
import random

screen = Screen()
screen.setup(width=500, height=400)
user_bet =screen.textinput(title="Make your bet", prompt="Which turtle will win the race? Enter a color: ")
colors = ["red", "green", "orange", "yellow", "blue", "purple", ]
turtles = []
race = False




counter = 0
for i in range(0,6):
  new_turtle= Turtle(shape="turtle")
  new_turtle.penup()
  new_turtle.color(colors[i])
  new_turtle.goto(x=-230,y=-80+i*30)
  turtles.append(new_turtle)

if user_bet:
  race = True


while race:

  for turtle in turtles:
    rand_dist = random.randint(0,10)
    turtle.forward(rand_dist)
    if turtle.xcor()>=230:
      race=False
      winning_turtle = turtle.pencolor()
      print(f"{winning_turtle} won the race!")
      if winning_turtle==user_bet:
        print("You won the bet congrats...")


screen.exitonclick()
