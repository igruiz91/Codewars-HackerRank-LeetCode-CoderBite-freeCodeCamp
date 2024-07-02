import time
from turtle import Screen
from snake import Snake
from food import Food
from scoreboard import Scoreboard



screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")
screen.tracer(0)

snake = Snake()
food = Food()
score = Scoreboard()

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
    score.increase_score()
    snake.eat_food()

  if snake.header.xcor()>280 or snake.header.ycor() >280 or snake.header.xcor() <-280 or snake.header.ycor()<-280:
    score.reset()
    snake.reset_snake()
    #score.game_over()


  for segment in snake.segments[1:]:
    if snake.header.distance(segment)< 10:
      score.reset()
      snake.reset_snake()

      #score.game_over()

screen.exitonclick()
