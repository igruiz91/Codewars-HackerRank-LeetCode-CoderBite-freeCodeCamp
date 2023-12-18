import os
from tkinter import *
import pandas

BACKGROUND_COLOR = "#B1DDC6"
#Images path
route = os.path.dirname(__file__)
card_front_path = os.path.join(route, "images", "card_front.png")
card_back_path = os.path.join(route, "images", "card_back.png")
wrong_button_path = os.path.join(route, "images", "wrong.png")
right_button_path = os.path.join(route, "images", "right.png")

#
window = Tk()
window.title("Flashy")
window.config(padx=50, pady=50 , bg = BACKGROUND_COLOR)

#Images


#Labels


canvas = Canvas(width=800, height=526, )
card_front_img = PhotoImage(file=card_front_path)
canvas.create_image(400, 263,image=card_front_img)
canvas.create_text(400, 150,text="Title", font=("Ariel", 40, "italic"))
canvas.create_text(400, 263, text="Word", font=("Ariel", 60, "bold"))
canvas.config(highlightthickness=0, bg=BACKGROUND_COLOR)
canvas.grid(row=0, column=0, columnspan=2)

#Buttons
button_wrong_img = PhotoImage(file = wrong_button_path)
button_wrong = Button(image=button_wrong_img, highlightthickness=0)
button_wrong.grid(row=1, column=0)

button_right_img = PhotoImage(file = right_button_path)
button_right = Button(image=button_right_img, highlightthickness=0)
button_right.grid(row=1, column=1)




window.mainloop()
