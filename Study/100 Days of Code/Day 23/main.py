import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)
level = Scoreboard()
player = Player()
cars = CarManager()

screen.listen()
screen.onkeypress(player.move_up, "Up")

game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()
    cars.new_car()
    cars.move_cars()

    for car in cars.car_list:
      if car.xcor()>10 and car.xcor()<-10:
        pass
      elif car.distance(player)<18:
        level.game_over()
        game_is_on=False

    if player.ycor()>280:
        level.increase_level()
        player.start_position()
        cars.level_up()

screen.exitonclick()
