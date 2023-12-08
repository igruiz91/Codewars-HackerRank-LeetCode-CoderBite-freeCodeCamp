import time
from turtle import Screen
from snake import Snake
from food import Food




screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")
screen.tracer(0)

snake = Snake()
food = Food()

screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")

game_on = True

while game_on:
  screen.update()
  time.sleep(0.1)
  snake.move()


  #Detect collision with food
  if snake.header.distance(food) <17:
    food.refresh()

screen.exitonclick()
