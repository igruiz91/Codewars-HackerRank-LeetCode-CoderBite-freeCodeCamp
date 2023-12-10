from turtle import Screen
import time
from paddle import Paddle
from score import Scoreboard
from ball import Ball

#net = paddle.create_net()


screen = Screen()
screen.setup(width=800, height=600)
screen.bgcolor("black")
screen.title("Pong Game")
screen.tracer(0)



paddle_player = Paddle((-350,0))
paddle_cpu = Paddle((350,0))

score = Scoreboard()
ball = Ball()


screen.listen()
screen.onkey(paddle_player.go_up, "w")
screen.onkey(paddle_player.go_down, "s")
screen.onkey(paddle_cpu.go_up, "Up")
screen.onkey(paddle_cpu.go_down, "Down")

game_on =True
while score.player_points<5 or score.cpu_points<5:
  time.sleep(ball.move_speed)
  screen.update()

  ball.move()
  ball.detect_wall_collision()

  if ball.distance(paddle_player)<50 and ball.xcor()<-320 or ball.distance(paddle_cpu)<50 and ball.xcor()>320:
    ball.bounce_x()
  else:
    if ball.xcor()<-380:
      score.increase_score(1)
      ball.reset_ball()
    elif ball.xcor()>380:
      score.increase_score(0)
      ball.reset_ball()



screen.exitonclick()


