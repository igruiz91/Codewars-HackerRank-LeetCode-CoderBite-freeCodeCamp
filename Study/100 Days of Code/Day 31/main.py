import os
import random
import time
from tkinter import *
import pandas

BACKGROUND_COLOR = "#B1DDC6"
#Images path
route = os.path.dirname(__file__)
card_front_path = os.path.join(route, "images", "card_front.png")
card_back_path = os.path.join(route, "images", "card_back.png")
wrong_button_path = os.path.join(route, "images", "wrong.png")
right_button_path = os.path.join(route, "images", "right.png")

data = pandas.read_csv(os.path.join(route, 'data', 'french_words.csv'))
learn  = data.to_dict(orient="records")
current_word = {}

def next_card():
  global current_word, flip_timer
  window.after_cancel(flip_timer)
  current_word = random.choice(learn)
  canvas.itemconfig(card_title, text="French", fill = "black")
  canvas.itemconfig(card_word , text=current_word["French"], fill = "black")
  canvas.itemconfig(card, image=card_front_img)
  flip_timer = window.after(3000, func=swap_card)


# data = pandas
def swap_card():
  canvas.itemconfig(card_title, fill='white', text="English")
  canvas.itemconfig(card_word, fill='white', text = current_word["English"])
  canvas.itemconfig(card, image=card_back_img)

#
window = Tk()
window.title("Flashy")
window.config(padx=50, pady=50 , bg = BACKGROUND_COLOR)

flip_timer =  window.after(3000, func=swap_card)
#Images
canvas = Canvas(width=800, height=526, )
card_front_img = PhotoImage(file=card_front_path)
card_back_img = PhotoImage(file=card_back_path)
card = canvas.create_image(400, 263,image=card_front_img)
#Labels
card_title = canvas.create_text(400, 150,text="French", font=("Ariel", 40, "italic"))
card_word = canvas.create_text(400, 263, text="Word", font=("Ariel", 60, "bold"))
canvas.config(highlightthickness=0, bg=BACKGROUND_COLOR)
canvas.grid(row=0, column=0, columnspan=2)

#Buttons
button_wrong_img = PhotoImage(file = wrong_button_path)
button_wrong = Button(image=button_wrong_img, highlightthickness=0 , command=next_card)
button_wrong.grid(row=1, column=0)

button_right_img = PhotoImage(file = right_button_path)
button_right = Button(image=button_right_img, highlightthickness=0 , command=next_card)
button_right.grid(row=1, column=1)

next_card()


window.mainloop()
