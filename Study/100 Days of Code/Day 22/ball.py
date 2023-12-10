
from turtle import Turtle


class Ball(Turtle):
  def __init__(self):
    super().__init__()
    self.shape("circle")
    self.shapesize(stretch_len=1, stretch_wid=1)
    self.color("white")
    self.penup()
    self.goto(0,0)
    self.move_speed = 0.1
    self.x=10
    self.y=10


  def move(self):
    new_x = self.xcor()+self.x
    new_y = self.ycor()+self.y
    self.goto(new_x, new_y)

  def reset_ball(self):
    self.goto(0,0)
    self.move_speed= 0.1
    self.bounce_x()

  def detect_wall_collision(self):
    if self.ycor()>280 or self.ycor()<-280:
      self.bounce_y()

  def bounce_x(self):
    self.x*=-1
    self.move_speed*=0.9


  def bounce_y(self):
    self.y*=-1

