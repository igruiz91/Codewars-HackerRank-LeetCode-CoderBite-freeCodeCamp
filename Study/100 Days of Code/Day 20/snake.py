from turtle import Turtle

MOVE_DISTANCE = 20
UP = 90
DOWN = 270
LEFT = 180
RIGHT = 0

class Snake:
  def __init__(self):
    self.segments = []
    self.create_snake()
    self.header = self.segments[0]

  def get_heading(self):
    return self.header.heading()

  def add_segment(self, position):
    new_segment = Turtle(shape="square")
    new_segment.color("white")
    new_segment.penup()
    new_segment.goto(position)
    self.segments.append(new_segment)


  def create_snake(self):
    for i in range(0, 3):
      self.add_segment((-20 * i, 0))


  def reset_snake(self):
    for segment in self.segments:
      segment.goto(1000,1000)
    self.segments.clear()
    self.create_snake()
    self.header = self.segments[0]


  def eat_food(self):
    self.add_segment(self.segments[-1].position())


  def move(self):
    for i in range(len(self.segments) - 1, 0, -1):
      new_x = self.segments[i - 1].xcor()
      new_y = self.segments[i - 1].ycor()
      self.segments[i].goto(new_x, new_y)
    self.segments[0].forward(MOVE_DISTANCE)

  #Snake Controls
  def up(self):
    if self.get_heading()==RIGHT or self.get_heading()==LEFT:
      self.header.setheading(UP)

  def down(self):
    if self.get_heading()==RIGHT or self.get_heading()==LEFT:
      self.header.setheading(DOWN)

  def left(self):
    if self.get_heading()==UP or self.get_heading()==DOWN:
      self.header.setheading(LEFT)

  def right(self):
    if self.get_heading()==UP or self.get_heading()==DOWN:
      self.header.setheading(RIGHT)


