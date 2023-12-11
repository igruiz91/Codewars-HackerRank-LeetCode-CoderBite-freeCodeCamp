from turtle import Turtle


FONT=("Courier",23,"normal")

class Scoreboard(Turtle):
  def __init__(self):
    super().__init__()
    self.score = 0
    self.hight_score = 0
    self.color("white")
    self.speed(0)
    self.penup()
    self.goto((0,263))
    self.hideturtle()
    self.update_score()


  def update_score(self):
    self.clear()
    self.write(f"Score: {self.score} | Hight Score: {self.hight_score}",align="center", font=FONT)

  def reset(self):
    if self.score>self.hight_score:
      self.hight_score=self.score
      self.save_score()
    self.score= 0
    self.update_score()

  def load_hight_score(self):
    with open("score.txt") as data:
      score = int(float(data.read()))
      if score:
        self.hight_score = score
      else:
        with open("score.txt", mode = "w") as file:
          file.write("0")

  def save_score(self):
    with open("score.txt", mode = "w") as file:
        file.write(f"{self.hight_score}")


  def increase_score(self):
    self.score+=1
    self.update_score()

  def game_over(self):
    self.goto(0,0)
    self.write("GAME OVER.", align="center", font=FONT)



