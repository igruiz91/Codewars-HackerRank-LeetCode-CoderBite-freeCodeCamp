from data import api_data#, question_data
from question_model import Question
from quiz_brain import QuizBrain

question_bank = []


for question in api_data: #change the data
  #new_question = Question(question["text"], question["answer"]) #for question_data use
  new_question = Question(question["question"], question["correct_answer"]) #for api_data use
  question_bank.append(new_question)


quiz = QuizBrain(question_bank)

while quiz.still_has_questions():
  quiz.next_question()

print("You complete all the quiz")
print(f"Your final score was: {quiz.score}/{quiz.question_number}")
