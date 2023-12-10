from turtle import Turtle

FONT=("Courier",40,"normal")


class Scoreboard(Turtle):
  def __init__(self):
    super().__init__()
    self.player_points = 0
    self.cpu_points = 0
    self.color("white")
    self.speed(0)
    self.penup()
    self.hideturtle()
    self.player_score()

  def player_score(self):
    self.goto(0,225)
    self.write(f"{self.player_points} {self.cpu_points}", align="center", font = FONT)

  def increase_score(self, player):
    if player == 0:
      self.player_points+=1
      self.clear()
      self.player_score()
    else:
      self.cpu_points+=1
      self.clear()
      self.player_score()

  def game_over(self):
    self.goto(0,0)
    self.write("GAME OVER.", align="center", font=FONT)
