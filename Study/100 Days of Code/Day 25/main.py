import turtle
import os
import pandas

route = os.path.dirname(__file__)
data = os.path.join(route, '50_states.csv')
states_data = pandas.read_csv(data)
image = os.path.join(route, "blank_states_img.gif")


corrects = []

def print_states(info):
  state = turtle.Turtle()
  state.penup()
  state.hideturtle()
  state.goto(int(info.x.item()), int(info.y.item()))
  state.write(f"{info.state.item()}")

def states_to_learn():
  missing_states = []
  for state in states_data.state:
    if state not in corrects:
      missing_states.append(state)
  new_data = pandas.DataFrame(missing_states)
  new_data.to_csv(os.path.join(route, "learn_states.csv"))


screen  = turtle.Screen()
screen.title("U.S States Game")
screen.addshape(image)

turtle.shape(image)

while len(corrects)<50:
  answer_state = screen.textinput(title = f"Guess the State {len(corrects)}/50", prompt= "What's another state's name?")
  if answer_state.lower() == "exit":
    states_to_learn()
    break
  for state in states_data.state:
    if state.lower() == answer_state:
      print_states(states_data[states_data.state == state])
      corrects.append(answer_state.capitalize())



turtle.mainloop()

