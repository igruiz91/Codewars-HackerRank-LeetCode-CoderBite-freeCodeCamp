from turtle import Turtle

PADDLE_SIZE = 5


class Paddle(Turtle):
  def __init__(self, position):
    super().__init__()
    self.shape('square')
    self.color("white")
    self.shapesize(stretch_wid = PADDLE_SIZE, stretch_len = 1)
    self.penup()
    self.goto(position)



  def go_up(self):
    new_y = self.ycor()+20
    self.goto(self.xcor(), new_y)

  def go_down(self):
    new_y = self.ycor()-20
    self.goto(self.xcor(), new_y)

  def create_net(self):
    net = Turtle()
    net.penup()
    net.goto(0,-300)
    net.setheading(900)
    net.pencolor("white")
    for i in range(30):
      if i%2 == 0:
        net.penup()
      else:
        net.pendown()
      net.forward(20)




#create controls



