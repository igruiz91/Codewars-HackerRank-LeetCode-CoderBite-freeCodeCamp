from tkinter import *
import os

dir_path = os.path.dirname(__file__)
tomato_path = os.path.join(dir_path,"tomato.png")

# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 1500
SHORT_BREAK_MIN = 300
LONG_BREAK_MIN = 1200
pomodoro_number = 1
# ---------------------------- TIMER RESET ------------------------------- #
def reset_timer():
  global pomodoro_number
  label_timer.config(text="Timer", fg=GREEN)
  canvas.itemconfig(timer_text, text="00:00")
  button_reset["state"] = "disabled"
  button_start["state"] = "normal"
  pomodoro_number=1


# ---------------------------- TIMER MECHANISM ------------------------------- #
def start_timer():
  button_start["state"] = "disabled"
  button_reset["state"] = "normal"
  if pomodoro_number%2==1:
    label_timer.config(text="Work.", fg=GREEN)
    count_down(WORK_MIN)
  elif pomodoro_number%9==0:
    label_timer.config(text="Long Break!", fg=PINK)
    count_down(LONG_BREAK_MIN)
  else:
    label_timer.config(text="Break!", fg=PINK)
    count_down(SHORT_BREAK_MIN)

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #
def count_down(count):
  if button_reset["state"]=="disabled":
    count=0
  count_min = count//60
  count_sec = count%60
  if count_sec < 10:
    count_sec=f"0{count_sec}"
  if count_min < 10:
    count_min=f"0{count_min}"
  canvas.itemconfig(timer_text, text=f"{count_min}:{count_sec}")
  if count>0:
    window.after(1000, count_down, count-1)
  if count==0:
    button_start["state"] = "normal"
    button_reset["state"] = "disabled"
    global pomodoro_number
    pomodoro_number+=1
    if pomodoro_number%2==0   :
      new_text = check_marks.cget("text")+"✔️"
      check_marks.config(text=new_text, fg=GREEN, bg=YELLOW, font=(FONT_NAME, 10))

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()

window.title("Pomodoro")
canvas = Canvas( width=200, height=224, bg=YELLOW, highlightthickness=0)
window.config(padx=100, pady=50, bg=YELLOW)
tomato_img = PhotoImage(file=tomato_path)
canvas.create_image(100, 112, image=tomato_img)
timer_text = canvas.create_text(100,130, text="00:00", fill="white", font=(FONT_NAME, 35, "bold"))
canvas.grid(column=1, row=1)

label_timer = Label(text="Timer", fg=GREEN, bg=YELLOW, font=(FONT_NAME,50) )
label_timer.grid(column=1, row=0)

button_start = Button(text="Start", highlightthickness=0, command=start_timer)
button_start.grid(column=0, row=3)

button_reset = Button(text="Reset", highlightthickness=0 , command=reset_timer)
button_reset.grid(column=2, row=3)

check_marks = Label(text="", fg=GREEN, bg=YELLOW,)
check_marks.grid(column=1, row=4)

#
# check_text = Label(text=f"{pomodoro_number}", font=(FONT_NAME,50))
# check_text.grid(column=2, row=4)

window.mainloop()
