from question_model import Question
from data import question_data
from quiz_brain import QuizBrain
from ui import QuizInterface

question_bank = []
for question in question_data:
    question_text = question["question"]
    question_answer = question["correct_answer"]
    new_question = Question(question_text, question_answer)
    question_bank.append(new_question)


quiz_questions = QuizBrain(question_bank)

quiz_ui = QuizInterface(quiz_questions)

while quiz_questions.still_has_questions():
    quiz_questions.next_question()

print("You've completed the quiz")
print(f"Your final score was: {quiz_questions.score}/{quiz_questions.question_number}")
