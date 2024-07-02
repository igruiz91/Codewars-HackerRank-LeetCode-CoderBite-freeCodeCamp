from tkinter import *
import os
from quiz_brain import QuizBrain


class QuizInterface():

  def __init__(self, quiz_brain: QuizBrain):
    self.quiz_brain = quiz_brain
    self.THEME_COLOR = "#375362"
    self.IMAGES_PATH =os.path.join(os.path.dirname(__file__), 'images')

    self.window = Tk()
    self.window.title("Quizzler")
    self.window.config(padx=50, pady=50, bg=self.THEME_COLOR)
    self.score_label = Label(text=f"Sore: {self.quiz_brain.score}", fg="white", bg=self.THEME_COLOR)
    self.score_label.grid(row=0, column=1)


    self.canvas = Canvas(width=300, height=250, bg="white")
    self.question_text = self.canvas.create_text(
      150, 125, width=280,
      fill=self.THEME_COLOR,
      text="Test", font=("Arial", 20, "italic"))
    self.canvas.grid(row=1,column=0, columnspan=2, pady=50)


    self.true_image = PhotoImage(file=os.path.join(self.IMAGES_PATH, "true.png"))
    self.true_button = Button(image=self.true_image, highlightthickness=0, command=self.answer_true)
    self.true_button.grid(row=2, column=0)

    self.false_image = PhotoImage(file=os.path.join(self.IMAGES_PATH, "false.png"))
    self.false_button = Button(image=self.false_image, highlightthickness=0, command=self.answer_false)
    self.false_button.grid(row=2, column=1)

    self.get_next_question()
    self.window.mainloop()

  def get_next_question(self):
    self.canvas.config(bg="white")
    if self.quiz_brain.still_has_questions():
      q_text = self.quiz_brain.next_question()
      self.canvas.itemconfig(self.question_text, text=q_text)
    else:
      self.canvas.itemconfig(self.question_text,
        text=f"You've reach the end of the quiz.\nThis is your results: {self.quiz_brain.score}/{len(self.quiz_brain.question_list)}")
      self.true_button.config(state="disabled")
      self.false_button.config(state="disabled")

  def answer_true(self):
    self.feedback(self.quiz_brain.check_answer("True"))

  def answer_false(self):
    self.feedback(self.quiz_brain.check_answer("False"))

  def feedback(self, answer):
    if answer == True:
      self.canvas.config(bg="green")
    else:
      self.canvas.config(bg="red")
    self.score_label.config(text=f"Score: {self.quiz_brain.score}")
    self.window.after(1000, self.get_next_question)






