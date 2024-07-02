from turtle import Turtle

FONT = ("Courier", 24, "normal")


class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.level = 1
        self.penup()
        self.hideturtle()
        self.show_level()

    def show_level(self):
      self.goto(-235,235)
      self.write(f"Level: {self.level}", align="left", font = FONT)

    def increase_level(self):
      self.clear()
      self.level+=1
      self.show_level()

    def game_over(self):
      self.goto(0,0)
      self.write("GAME OVER", align="center", font = FONT)



