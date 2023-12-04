class QuizBrain():
  def __init__(self, question_list):
    self.question_number = 0
    self.score = 0
    self.question_list = question_list

  def still_has_questions(self):
    return self.question_number < len(self.question_list)

  def check_answer(self, answer, correct_answer):
    if correct_answer.lower() == answer.lower():
      self.score+=1
      print("Correct!")
    else:
      print("Wrong...")
    print(f"The correct answer was {correct_answer}")
    print(f"Your current score is : {self.score}/{self.question_number}")
    print("\n")

  def next_question(self):
    if self.still_has_questions():
      current_question = self.question_list[self.question_number]
      resp = input(f"Q.{self.question_number+1}: {current_question.text}: (True/False): ")
      self.question_number +=1
      self.check_answer(resp, current_question.answer)




